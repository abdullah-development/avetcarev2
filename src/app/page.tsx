import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ProductFrame from "@/components/ProductFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { areas, clients, products, reasons } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Sustainable Cleaning Equipment in Dubai & UAE` },
  alternates: { canonical: "/" },
};

const stats = [
  { value: "90%", label: "Less water with ClaraClean®" },
  { value: "80%", label: "Fewer cleaning chemicals" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-forest-950 lg:items-center lg:justify-center">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          aria-hidden
        >
          <source src="/videos/avetcare.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-950/80 to-transparent" />

        <div className="container-x pt-28 pb-10 sm:pb-16 lg:pb-32">
          <p className="eyebrow !text-lime-300">Cleaning & hygiene solutions</p>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1.04] font-medium !text-white sm:mt-6 sm:text-7xl lg:text-8xl">
            Clean by design
            <br />
            <em className="font-light text-lime-300 italic">Green future</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-xl">
            European-made, colour-coded cleaning systems that cut water and chemicals — trusted by hospitals, hotels,
            offices and schools across the globe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/products" className="btn-primary">
              Explore products →
            </Link>
            <Link href="/about" className="btn-ghost">
              Why AVETCARE
            </Link>
          </div>
        </div>

        <div className="w-full lg:absolute lg:inset-x-0 lg:bottom-0">
          <div className="container-x">
            <dl className="grid grid-cols-2 border-t border-white/15 text-center">
              {stats.map((s) => (
                <div key={s.label} className="px-2 py-4 sm:py-6">
                  <dt className="text-xs text-white/60 sm:text-sm">{s.label}</dt>
                  <dd className="font-display text-2xl text-white sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[4/5]">
            <Image quality={85} src="/images/welcome-pro.jpg" alt="Professional cleaner using a floor scrubber in a commercial corridor" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-4 max-w-[14rem] rounded-2xl bg-white p-5 shadow-2xl shadow-forest-900/15 sm:left-auto sm:-right-8 sm:p-6">
            <p className="font-display text-4xl text-leaf-600">15+ yrs</p>
            <p className="mt-1 text-sm text-ink-500">of cleaning expertise in the Middle East</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Welcome to AVETCARE" title="Excellence in cleaning, engineered for the planet." />
          <Reveal delay={100} className="prose-body mt-6 text-lg leading-relaxed text-ink-500">
            <p>
              Discover unparalleled excellence in cleaning and hygiene solutions. Committed to process-oriented excellence,
              we redefine industry standards through cutting-edge technologies and a dedication to sustainable, effective,
              client-focused solutions.
            </p>
            <p>
              Elevate your standards with a partner who not only understands the intricacies of cleanliness but sets new
              benchmarks through innovation, reliability and a relentless pursuit of hygiene perfection.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Colour-coded system", "Made in Europe", "Certified & tested", "Eco-label textiles"].map((f) => (
              <div key={f} className="group flex cursor-default items-center gap-3 rounded-xl px-2 py-1.5 font-semibold text-ink-900 transition hover:bg-white hover:text-leaf-600">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-leaf-500/15 text-leaf-600 transition group-hover:scale-110 group-hover:bg-leaf-500 group-hover:text-white">✓</span>
                {f}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-sand-100 py-16 sm:py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="AVETCARE products"
              title="One system for every cleaning task."
              text="From eco-friendly reusable systems to efficient single-use products and specialised equipment."
            />
            <Link href="/products" className="btn-outline">
              View all products
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-transparent bg-white transition duration-500 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-2xl hover:shadow-forest-900/10"
                >
                  <div className="p-3">
                    <ProductFrame src={p.hero} alt={p.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" hover className="aspect-[4/3]" />
                  </div>
                  <div className="flex flex-1 flex-col px-7 pt-4 pb-7">
                    <p className="text-xs font-bold tracking-[0.18em] text-leaf-600 uppercase">{p.category}</p>
                    <h3 className="mt-2 text-2xl font-medium transition group-hover:text-leaf-600">{p.name}</h3>
                    <p className="mt-3 flex-1 text-ink-500">{p.tagline}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-900">
                      Discover <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-16 sm:py-24 lg:py-32">
        <div className="absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-leaf-500/25 blur-3xl" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Sustainability"
              title="Effectiveness meets environmental responsibility."
            />
            <Reveal delay={100} className="prose-body mt-6 text-lg leading-relaxed text-white/75">
              <p>
                Each product is thoughtfully crafted to minimise its ecological footprint — from eco-friendly formulations to
                recyclable packaging and textiles made from 100% recycled polyester.
              </p>
              <p>
                Make a positive impact with every swipe: choose a greener path to cleanliness that aligns with your values and
                contributes to a healthier planet.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                ["90%", "less water"],
                ["99.999%", "germ reduction with ozone"],
                ["90%", "recycled PET trolleys"],
              ].map(([v, l]) => (
                <div key={l} className="flex items-baseline gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition sm:block duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-white/10">
                  <p className="shrink-0 font-display text-3xl text-lime-300 sm:text-2xl lg:text-3xl">{v}</p>
                  <p className="mt-1 text-sm text-white/60">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image quality={85} src="/images/sustainability.jpg" alt="Eco-conscious cleaning for a greener future" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS */}
      <section className="container-x py-16 sm:py-24 lg:py-32">
        <SectionHeading
          center
          eyebrow="Cleaning areas"
          title="Tailored solutions for every industry."
          text="Different industries have specific requirements. Our range delivers proven results wherever hygiene matters."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 100}>
              <Link href={`/cleaning-areas/${a.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[4/5]">
                <Image quality={85} src={a.image} alt={`${a.name} cleaning solutions`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="text-xs font-bold tracking-[0.2em] text-lime-300">0{i + 1}</span>
                  <h3 className="mt-2 text-2xl font-medium !text-white">{a.name}</h3>
                  <p className="mt-2 overflow-hidden text-sm text-white/75 transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100">
                    {a.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section className="bg-sand-100 py-16 sm:py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Compelling rationales"
              title="Why businesses choose AVETCARE."
              text="Top-notch quality, tailor-made solutions, cutting-edge products and expert know-how across every cleaning domain."
            />
            <Reveal delay={100} className="mt-8">
              <Link href="/contact" className="btn-primary">Talk to an expert →</Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 120} className={i === reasons.length - 1 ? "sm:col-span-2" : ""}>
                <div className="group lift h-full rounded-3xl border border-transparent bg-white p-6 hover:border-leaf-500/30 sm:p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sand-100 transition duration-300 group-hover:scale-110 group-hover:bg-leaf-500/15">
                    <Image src={r.icon} alt="" width={34} height={34} />
                  </div>
                  <h3 className="mt-6 text-xl font-medium transition group-hover:text-leaf-600">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY + VIDEO */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <SectionHeading
            eyebrow="Quality"
            title="Certified safe. Proven effective."
            text="Every product is meticulously crafted for effectiveness and safety — each bearing certifications that guarantee the highest standards of reliability."
          />
          <Reveal delay={100} className="lift mt-8 flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">
            <Image src="/images/certificate1.jpg" alt="AVETCARE product certifications" width={160} height={80} className="h-auto w-36 object-contain" />
            <p className="text-sm text-ink-500">Tested and officially certified — including Nordic Swan Ecolabel and HACCP-compliant textiles.</p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-forest-900 shadow-2xl shadow-forest-900/20">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/2pUF_beGJcY?rel=0"
              title="AVETCARE cleaning solutions video"
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* CLIENTS */}
      <section aria-labelledby="clients-heading" className="border-y border-sand-200 bg-white py-14">
        <h2 id="clients-heading" className="text-center font-sans text-xs font-bold tracking-[0.25em] !text-ink-500 uppercase">
          Our valued clients
        </h2>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* Two identical halves, each wide enough to fill even ultra-wide screens, so the -50% loop never shows a gap. */}
          <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {[0, 1].map((half) =>
              Array.from({ length: 4 }, () => clients)
                .flat()
                .map((c, i) => {
                  const visible = half === 0 && i < clients.length;
                  return (
                    <li key={`${half}-${i}`} aria-hidden={!visible} className="shrink-0 px-8 sm:px-10">
                      <Image
                        src={c.logo}
                        alt={visible ? c.name : ""}
                        width={150}
                        height={70}
                        className="h-14 w-auto object-contain transition duration-300 hover:scale-110"
                      />
                    </li>
                  );
                }),
            )}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-16 sm:py-24 lg:py-32">
        <Image quality={85} src="/images/solution.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-15" />
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading light eyebrow="Get in touch" title="Let's find the right system for you." text="Complete the form and our team will get back to you soon." />
            <Reveal delay={100} className="mt-10 space-y-4 text-white/80">
              <p>
                <a href={site.phoneHref} className="font-display text-2xl text-white hover:text-lime-300">{site.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </p>
              <p className="text-white/60">{site.address.street}, {site.address.locality}, Dubai</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10">
            <ContactForm dark />
          </Reveal>
        </div>
      </section>
    </>
  );
}
