import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductFrame from "@/components/ProductFrame";
import Reveal from "@/components/Reveal";
import { areas, getArea, products } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Every slug is prerendered via generateStaticParams; let the route block instead of streaming a shell.
export const instant = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  const title = `${a.name} Cleaning Solutions in the UAE`;
  return {
    title,
    description: a.description,
    alternates: { canonical: `/cleaning-areas/${a.slug}` },
    openGraph: { url: `/cleaning-areas/${a.slug}`, title, description: a.description, images: [{ url: a.banner, alt: a.name }] },
    twitter: { card: "summary_large_image", title, description: a.description, images: [a.banner] },
  };
}

export default async function AreaPage({ params }: Props) {
  const a = getArea((await params).slug);
  if (!a) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${a.name} cleaning solutions`,
          description: a.description,
          serviceType: "Professional cleaning equipment supply",
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          image: absoluteUrl(a.banner),
          url: absoluteUrl(`/cleaning-areas/${a.slug}`),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Cleaning Areas", item: absoluteUrl("/cleaning-areas") },
            { "@type": "ListItem", position: 3, name: a.name, item: absoluteUrl(`/cleaning-areas/${a.slug}`) },
          ],
        }}
      />
      <PageHero
        eyebrow="Cleaning areas"
        title={a.name}
        lead={a.short}
        image={a.banner}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Cleaning Areas", href: "/cleaning-areas" },
          { name: a.name, href: `/cleaning-areas/${a.slug}` },
        ]}
      />
      <section className="container-x grid items-start gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <div className="prose-body text-xl leading-relaxed text-ink-700">
            {a.intro.map((t) => (
              <p key={t.slice(0, 20)}>{t}</p>
            ))}
          </div>
          <h2 className="mt-10 text-2xl font-medium">{a.lead}</h2>
          <ul className="mt-6 space-y-4">
            {a.benefits.map((b) => (
              <li key={b} className="group flex gap-4 rounded-2xl border border-transparent bg-white p-5 shadow-sm transition duration-300 hover:translate-x-1 hover:border-leaf-500/30 hover:shadow-lg hover:shadow-forest-900/5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf-500 text-white transition group-hover:scale-110 group-hover:bg-forest-900">✓</span>
                <span className="pt-1 text-ink-700">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-ink-500 italic">{a.closing}</p>
        </Reveal>
        <Reveal delay={150} className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image quality={85} src={a.image} alt={`${a.name} environment`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </section>
      <section className="bg-sand-100 py-20">
        <div className="container-x">
          <h2 className="text-3xl font-medium sm:text-4xl">Recommended products</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group lift flex items-center gap-5 rounded-3xl border border-transparent bg-white p-4 hover:border-leaf-500/30">
                <ProductFrame src={p.hero} alt={p.name} sizes="96px" pad="p-2" className="h-24 w-24 shrink-0 !rounded-2xl" />
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-leaf-600 uppercase">{p.category}</p>
                  <p className="mt-1 font-display text-lg text-ink-900 transition group-hover:text-leaf-600">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x pt-16">
        <h2 className="sr-only">Other sectors</h2>
        <ul className="flex flex-wrap gap-3">
          {areas
            .filter((o) => o.slug !== a.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link href={`/cleaning-areas/${o.slug}`} className="btn-outline">{o.name}</Link>
              </li>
            ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
