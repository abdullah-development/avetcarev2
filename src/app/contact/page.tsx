import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Cleaning Equipment Supplier in Dubai",
  description: `Contact AVETCARE Middle East in Dubai: call ${site.phone}, email ${site.email}, or visit us at The Meydan Hotel, Grandstand, Nad Al Sheba.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", images: ["/images/bg5.jpg"] },
};

export default function ContactPage() {
  const cards = [
    { label: "Call us", value: site.phone, href: site.phoneHref },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "WhatsApp", value: "Chat with our team", href: site.whatsapp },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lead="Complete the form below and we'll get back to you soon — or reach us directly by phone, email or WhatsApp."
        image="/images/bg5.jpg"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <section className="container-x -mt-10 grid gap-5 sm:grid-cols-3">
        {cards.map((c) => (
          <a key={c.label} href={c.href} className="group relative rounded-3xl border border-transparent bg-white p-7 shadow-xl shadow-forest-900/5 transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-forest-900/15">
            <p className="text-xs font-bold tracking-[0.18em] text-leaf-600 uppercase">{c.label}</p>
            <p className="mt-2 font-display text-xl text-ink-900 transition group-hover:text-leaf-600">{c.value} <span aria-hidden className="inline-block opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">→</span></p>
          </a>
        ))}
      </section>
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1.3fr_1fr] lg:py-28">
        <Reveal className="rounded-[2rem] bg-white p-6 sm:p-10">
          <h2 className="text-3xl font-medium">Send us a message</h2>
          <p className="mt-2 mb-8 text-ink-500">We usually reply within one business day.</p>
          <ContactForm />
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-6">
          <div className="rounded-[2rem] bg-forest-900 p-8 text-white/80 transition duration-300 hover:bg-forest-800">
            <h2 className="text-2xl font-medium !text-white">Visit our office</h2>
            <address className="mt-4 leading-relaxed not-italic">
              {site.address.street},
              <br />
              {site.address.locality}, {site.address.region}, U.A.E
            </address>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-white">Office hours:</span> {site.hours}
            </p>
          </div>
          <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-[2rem]">
            <iframe
              src={site.mapEmbed}
              title="AVETCARE office location on Google Maps"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
