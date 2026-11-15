import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductFrame from "@/components/ProductFrame";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional Cleaning Products & Equipment",
  description:
    "Browse AVETCARE's professional cleaning range in the UAE: ClaraClean® systems, ozone water generators, DRiZZ® spray mops, microfibre textiles, cleaning trolleys and SYR tools.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", images: ["/images/products-hero.jpg"] },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AVETCARE products",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/products/${p.slug}`),
            name: p.name,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
          ],
        }}
      />
      <PageHero
        eyebrow="Our range"
        title="Products built for cleaner, greener spaces."
        lead="Eco-friendly reusable systems, efficient single-use products and specialised equipment — designed for ease of use, safety and real cost savings."
        image="/images/products-hero.jpg"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ]}
      />
      <section className="container-x space-y-8 py-24">
        {products.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/products/${p.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-transparent bg-white transition duration-500 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-2xl hover:shadow-forest-900/10 md:grid-cols-2"
            >
              <div className={`p-4 sm:p-5 ${i % 2 ? "md:order-2" : ""}`}>
                <ProductFrame src={p.hero} alt={p.name} sizes="(min-width: 768px) 50vw, 100vw" hover className="aspect-[4/3] h-full md:aspect-auto md:min-h-[22rem]" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-bold tracking-[0.18em] text-leaf-600 uppercase">
                  0{i + 1} · {p.category}
                </p>
                <h2 className="mt-3 text-3xl font-medium transition group-hover:text-leaf-600 sm:text-4xl">{p.name}</h2>
                <p className="mt-4 text-lg text-ink-500">{p.tagline}</p>
                <p className="mt-3 line-clamp-3 text-ink-500">{p.intro[0]}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-900">
                  Explore {p.name} <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
