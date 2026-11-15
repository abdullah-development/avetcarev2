import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Cleaning Equipment Specialists Since 2011",
  description:
    "AVETCARE Middle East (formerly Avet Middle East) has supplied innovative, colour-coded, European-made cleaning equipment across the UAE since 2011. Our mission, vision and values.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", images: ["/images/about/aboutus.jpg"] },
};

const values = [
  { title: "Excellence", text: "We are dedicated to delivering the highest-quality products and services to our customers." },
  { title: "Innovation", text: "We continuously seek new and improved ways to meet the evolving needs of our customers." },
  { title: "Integrity", text: "We operate with honesty, transparency and respect in all our business dealings." },
  { title: "Customer focus", text: "We prioritise the needs and satisfaction of our customers in everything we do." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: `About ${site.name}`,
          about: { "@id": absoluteUrl("/#organization") },
        }}
      />
      <PageHero
        eyebrow="About AVETCARE"
        title="Your trusted partner in innovative cleaning."
        lead="Established in 2011 as Avet Middle East and rebranded in 2023, we provide top-quality cleaning solutions tailored to customers in the UAE and beyond."
        image="/images/about/dubai.jpg"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image quality={85} src="/images/about/aboutus.jpg" alt="The AVETCARE Middle East team and products" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Our story" title="Made in Europe. Trusted in the Middle East." />
          <Reveal delay={100} className="prose-body mt-6 text-lg leading-relaxed text-ink-500">
            <p>
              We specialise in easy-to-use and disposable cleaning equipment manufactured in Europe to the highest standards of
              quality and reliability. Our colour-coded system makes it simple to identify the right tool for each task —
              improving efficiency and effectiveness.
            </p>
            <p>
              Driven by our mission and values, we are committed to customer satisfaction while prioritising environmental
              sustainability, actively reducing our carbon footprint throughout our operations.
            </p>
            <p>
              What sets us apart is our dedication to innovation and unique products that deliver superior performance — and
              long-standing client relationships that testify to our commitment to excellence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-900 py-14 sm:py-20 lg:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            {
              t: "Mission",
              img: "/images/about/mission.jpg",
              text: "To provide our customers with the most advanced and efficient cleaning equipment solutions, helping them achieve their cleanliness goals while reducing their environmental impact.",
            },
            {
              t: "Vision",
              img: "/images/about/vision.jpg",
              text: "To become the preferred choice for cleaning equipment solutions in the Middle East — known for reliability, expertise and commitment to customer satisfaction.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120} className="group relative isolate overflow-hidden rounded-[2rem] p-10 sm:p-14">
              <Image quality={85} src={c.img} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="-z-20 object-cover opacity-40 transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
              <p className="eyebrow !text-lime-300">Our {c.t.toLowerCase()}</p>
              <h2 className="mt-4 text-4xl font-medium !text-white">{c.t}</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_1.5fr] lg:py-28">
        <div>
          <SectionHeading eyebrow="Core values" title="What guides everything we do." />
          <Reveal delay={100} className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[2rem] lg:block">
            <Image quality={85} src="/images/about/values.jpg" alt="AVETCARE core values" fill sizes="40vw" className="object-cover" />
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 120} className="group rounded-3xl border border-transparent bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-xl hover:shadow-forest-900/10">
              <p className="font-display text-5xl text-leaf-500/30 transition duration-300 group-hover:text-leaf-500">0{i + 1}</p>
              <h3 className="mt-4 text-2xl font-medium">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-28">
        <Image quality={85} src="/images/about/ourteam.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-forest-950/75" />
        <div className="container-x max-w-3xl text-center">
          <SectionHeading
            center
            light
            eyebrow="Our team"
            title="Passionate professionals. Exceptional results."
            text="Our team of experienced professionals is passionate about providing the best cleaning equipment solutions. With their expertise and dedication, we deliver exceptional results and exceed customer expectations."
          />
        </div>
      </section>
      <CtaBand title="Join us on the journey to a cleaner, more sustainable future." />
    </>
  );
}
