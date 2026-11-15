import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Info Center — Brochures, Catalogues & Data Sheets",
  description:
    "Download AVETCARE brochures, product catalogues, ozone generator flyers and scientific studies. Safety and application information for our professional cleaning products.",
  alternates: { canonical: "/info-center" },
  openGraph: { url: "/info-center", images: ["/images/info1.jpg"] },
};

const docs = [
  { title: "AVETCARE Product Catalogue", desc: "The complete AVETCARE range in one brochure.", href: "/pdf/avetcare-catalog.pdf", tag: "Catalogue" },
  { title: "ClaraClean® Ozone Generators", desc: "Flyer for click! 150 and EOS ozone water generators.", href: "/pdf/ozone-generators.pdf", tag: "Flyer" },
  { title: "ClaraClean® Trolley", desc: "Modular trolley system made from 90% recycled PET.", href: "/pdf/claraclean-trolley.pdf", tag: "Brochure" },
  { title: "Ozone: Effects on Bacteria & Viruses", desc: "Scientific study on the effectiveness of ozonated water.", href: "/pdf/ozone-effects-on-bacteria-viruses.pdf", tag: "Study" },
];

export default function InfoCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Info Center"
        lead="Unsure whether our products meet your safety guidelines? Want to look closer at ingredients or need help with application? Find brochures, catalogues and data here."
        image="/images/info1.jpg"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Info Center", href: "/info-center" },
        ]}
      />
      <section className="container-x py-14 sm:py-20 lg:py-28">
        <SectionHeading eyebrow="Downloads" title="Brochures & catalogues" text="All documents are in English (EN) and open as PDF." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {docs.map((d, i) => (
            <Reveal as="li" key={d.href} delay={(i % 2) * 100}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full items-center gap-6 rounded-3xl bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest-900/10"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-forest-900 font-bold text-lime-300 transition group-hover:bg-leaf-500 group-hover:text-white">
                  PDF
                </span>
                <span className="flex-1">
                  <span className="text-xs font-bold tracking-[0.18em] text-leaf-600 uppercase">{d.tag} · EN</span>
                  <span className="mt-1 block font-display text-xl text-ink-900">{d.title}</span>
                  <span className="mt-1 block text-ink-500">{d.desc}</span>
                </span>
                <span aria-hidden className="text-2xl text-forest-900 transition group-hover:translate-y-1">↓</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
      <CtaBand title="Can't find what you need?" text="Ask us for safety data sheets or application guidance for any AVETCARE product." />
    </>
  );
}
