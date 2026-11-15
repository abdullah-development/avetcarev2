import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductFrame from "@/components/ProductFrame";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Every slug is prerendered via generateStaticParams; let the route block instead of streaming a shell.
export const instant = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  const title = `${p.name} — ${p.category} in the UAE`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { type: "website", url: `/products/${p.slug}`, title, description: p.description, images: [{ url: p.hero, alt: p.name }] },
    twitter: { card: "summary_large_image", title, description: p.description, images: [p.hero] },
  };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const others = products.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          image: [p.hero, ...p.blocks.flatMap((b) => (b.image ? [b.image] : []))].map((src) => absoluteUrl(src)),
          brand: { "@type": "Brand", name: p.slug === "syr" ? "SYR" : p.name.split(" ")[0] },
          url: absoluteUrl(`/products/${p.slug}`),
          seller: { "@id": absoluteUrl("/#organization") },
          ...(p.gallery && {
            isRelatedTo: p.gallery.map((g) => ({ "@type": "Product", name: g.name, image: absoluteUrl(g.image) })),
          }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
            { "@type": "ListItem", position: 3, name: p.name, item: absoluteUrl(`/products/${p.slug}`) },
          ],
        }}
      />

      <PageHero
        eyebrow={p.category}
        title={p.name}
        lead={p.tagline}
        image="/images/bg5.jpg"
        product={p.hero}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: p.name, href: `/products/${p.slug}` },
        ]}
      />

      {/* intro */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <Reveal className="prose-body text-xl leading-relaxed text-ink-700">
          {p.intro.map((t) => (
            <p key={t.slice(0, 20)}>{t}</p>
          ))}
        </Reveal>
        {p.stats ? (
          <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
            {p.stats.map((s) => (
              <div key={s.label} className="lift rounded-3xl bg-forest-900 p-6 text-white hover:bg-forest-800">
                <p className="font-display text-4xl text-lime-300">{s.value}</p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal delay={120} className="self-start rounded-3xl bg-forest-900 p-8 text-white">
            <p className="font-display text-2xl">Need advice on {p.name}?</p>
            <p className="mt-3 text-white/70">Our specialists will recommend the right configuration for your facility.</p>
            <Link href="/contact" className="btn-primary mt-6">Request a quote</Link>
          </Reveal>
        )}
      </section>

      {/* highlights */}
      {p.highlights && (
        <section className="bg-sand-100 py-14 sm:py-20 lg:py-28">
          <div className={`container-x grid gap-6 ${p.highlights.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {p.highlights.map((h, hi) => (
              <Reveal key={h.title} delay={hi * 120} className="rounded-[2rem] bg-white p-8 transition duration-300 hover:shadow-xl hover:shadow-forest-900/5 sm:p-10">
                <h2 className="text-3xl font-medium">{h.title}</h2>
                <ol className={`mt-8 grid gap-5 ${p.highlights!.length === 1 ? "sm:grid-cols-2" : ""}`}>
                  {h.items.map((it, i) => (
                    <li key={it} className="group flex gap-4 rounded-2xl p-2 transition hover:bg-sand-50">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf-500/15 text-sm font-bold text-leaf-600 transition group-hover:bg-leaf-500 group-hover:text-white">
                        {i + 1}
                      </span>
                      <span className="pt-1.5 leading-relaxed text-ink-500">{it}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* blocks */}
      {p.blocks.length > 0 && (
        <section className="container-x space-y-16 py-14 sm:space-y-24 sm:py-20 lg:space-y-32 lg:py-28">
          {p.blocks.map((b, i) => (
            <article key={b.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {b.image && (
                <Reveal className={i % 2 ? "lg:order-2" : ""}>
                  <ProductFrame src={b.image} alt={b.title} sizes="(min-width: 1024px) 50vw, 100vw" cover={b.photo} className="aspect-[5/4]" />
                </Reveal>
              )}
              <Reveal delay={120}>
                {b.eyebrow && <p className="eyebrow">{b.eyebrow}</p>}
                <h2 className="mt-4 text-3xl leading-tight font-medium sm:text-4xl">{b.title}</h2>
                <div className="prose-body mt-6 text-lg leading-relaxed text-ink-500">
                  {b.body.map((t) => (
                    <p key={t.slice(0, 20)}>{t}</p>
                  ))}
                </div>
                {b.bullets && (
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {b.bullets.map((x) => (
                      <li key={x} className="group/b flex items-center gap-3 rounded-2xl bg-sand-100 px-4 py-3 font-semibold text-ink-900 transition duration-300 hover:-translate-y-0.5 hover:bg-leaf-500 hover:text-white">
                        <span className="text-leaf-600 transition group-hover/b:text-white">✓</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </article>
          ))}
        </section>
      )}

      {/* gallery */}
      {p.gallery && (
        <section className={p.blocks.length ? "bg-sand-100 py-14 sm:py-20 lg:py-28" : "container-x pb-20 lg:pb-28"}>
          <div className={p.blocks.length ? "container-x" : ""}>
            <h2 className="text-3xl font-medium sm:text-4xl">{p.slug === "syr" ? "The SYR range" : "More models"}</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {p.gallery.map((g, i) => (
                <Reveal as="li" key={g.name} delay={(i % 4) * 80}>
                  <figure className="group lift h-full overflow-hidden rounded-3xl border border-sand-200 bg-white hover:border-leaf-500/40">
                    <div className="relative aspect-square">
                      <Image src={g.image} alt={g.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-6" />
                    </div>
                    <figcaption className="border-t border-sand-200 px-3 py-3 sm:px-6 sm:py-5">
                      <p className="text-sm font-semibold text-ink-900 transition group-hover:text-leaf-600 sm:text-base">{g.name}</p>
                      {g.note && <p className="text-xs text-ink-500 sm:text-sm">{g.note}</p>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* certified + downloads */}
      <section className="container-x py-20">
        <div className="grid items-center gap-8 rounded-[2rem] border border-sand-200 bg-white p-8 transition duration-300 hover:border-leaf-500/30 hover:shadow-xl hover:shadow-forest-900/5 sm:p-12 lg:grid-cols-[auto_1fr_auto]">
          <Image src="/images/certificate1.jpg" alt="Product certifications" width={200} height={100} className="h-auto w-44 object-contain" />
          <div>
            <h2 className="text-2xl font-medium">Tested, officially certified, highest quality.</h2>
            <p className="mt-2 text-ink-500">Supplied in the UAE by {site.name}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {p.downloads?.map((d) => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener" className="btn-outline">
                ↓ {d.label}
              </a>
            ))}
            <Link href="/contact" className="btn-primary">Get a quote</Link>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="container-x pb-8">
        <h2 className="text-3xl font-medium">Explore more products</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-6 md:grid-cols-3">
          {others.map((o, i) => (
            <Link key={o.slug} href={`/products/${o.slug}`} className={`group lift overflow-hidden rounded-3xl border border-transparent bg-white p-2 hover:border-leaf-500/30 sm:p-3 ${i === 2 ? "max-md:hidden" : ""}`}>
              <ProductFrame src={o.hero} alt={o.name} sizes="(min-width: 768px) 33vw, 100vw" hover pad="p-3 sm:p-5" className="aspect-square sm:aspect-[16/10]" />
              <div className="px-2 pt-3 pb-2 sm:px-3 sm:pt-4 sm:pb-3">
                <p className="text-xs font-bold tracking-[0.18em] text-leaf-600 uppercase">{o.category}</p>
                <h3 className="mt-1 text-base font-medium transition group-hover:text-leaf-600 sm:text-xl">{o.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
