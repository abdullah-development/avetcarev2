import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { areas } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Solutions by Industry — Healthcare, Hotels, Offices & More",
  description:
    "AVETCARE cleaning solutions for healthcare, offices, schools, hotels, malls and sports facilities in the UAE — sustainable systems that raise hygiene and cut costs.",
  alternates: { canonical: "/cleaning-areas" },
  openGraph: { url: "/cleaning-areas", images: ["/images/cl.jpg"] },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Cleaning Areas", item: absoluteUrl("/cleaning-areas") },
          ],
        }}
      />
      <PageHero
        eyebrow="Cleaning areas"
        title="Effective cleaning solutions for every industry."
        lead="Different industries have specific requirements. Our range covers them — from sustainable reusable systems to efficient single-use products and specialised equipment."
        image="/images/cl.jpg"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Cleaning Areas", href: "/cleaning-areas" },
        ]}
      />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
        <SectionHeading eyebrow="Our approach" title="Efficiency, hygiene and sustainability — in harmony." />
        <Reveal delay={100} className="prose-body text-lg leading-relaxed text-ink-500">
          <p>
            The wide range of AVETCARE products covers floors, surfaces, glass and sanitary facilities through to areas with the
            highest hygiene requirements. Using our products is easy and safe.
          </p>
          <p>
            They increase efficiency and cleaning quality while delivering cost savings and environmental protection — with
            satisfied customers and employees. Years of success across industries let us continually develop new, innovative
            solutions.
          </p>
        </Reveal>
      </section>
      <section className="container-x space-y-6 pb-20">
        {areas.map((a, i) => (
          <Reveal key={a.slug}>
            <Link href={`/cleaning-areas/${a.slug}`} className="group relative isolate block overflow-hidden rounded-[2rem]">
              <Image quality={85} src={a.banner} alt={`${a.name} cleaning`} fill sizes="100vw" className="-z-20 object-cover transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/70 to-forest-950/10" />
              <div className="grid min-h-[20rem] items-end gap-6 p-8 sm:p-12 md:grid-cols-[auto_1fr_auto] md:items-center">
                <span className="font-display text-6xl text-lime-300/80">0{i + 1}</span>
                <div className="max-w-xl">
                  <h2 className="text-3xl font-medium !text-white sm:text-4xl">{a.name}</h2>
                  <p className="mt-3 text-white/75">{a.short}</p>
                </div>
                <span className="btn-ghost self-start md:self-center">Learn more →</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
