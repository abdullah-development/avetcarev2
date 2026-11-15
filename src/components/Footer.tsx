import Image from "next/image";
import Link from "next/link";
import { areas, products } from "@/lib/content";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white/70">
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-leaf-600/20 blur-3xl" />
      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${site.shortName} home`}>
            <Image src="/images/leaf.png" alt="" width={56} height={56} className="h-12 w-12 transition duration-500 group-hover:-rotate-12 group-hover:scale-110" />
            <span className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold tracking-[0.14em] text-white transition group-hover:text-lime-300">AVETCARE</span>
              <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.32em] text-lime-300 uppercase">Middle East</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed">
            Innovative, sustainable cleaning and hygiene solutions for the UAE and beyond — trusted since {site.founded}.
          </p>
          <p className="mt-6 text-sm">
            <span className="font-semibold text-white">Office hours</span>
            <br />
            {site.hours}
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold tracking-[0.2em] !text-lime-300 uppercase">Products</h2>
          <ul className="mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3 sm:text-base">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="inline-block transition duration-300 hover:translate-x-1 hover:text-lime-300">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold tracking-[0.2em] !text-lime-300 uppercase">Sectors</h2>
          <ul className="mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3 sm:text-base">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/cleaning-areas/${a.slug}`} className="inline-block transition duration-300 hover:translate-x-1 hover:text-lime-300">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-sans text-xs font-bold tracking-[0.2em] !text-lime-300 uppercase">Get in touch</h2>
          <address className="mt-5 space-y-3 not-italic">
            <p>
              {site.address.street},
              <br />
              {site.address.locality}, {site.address.region}, UAE
            </p>
            <p>
              <a href={site.phoneHref} className="text-white hover:text-lime-300">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-white hover:text-lime-300">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>© {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {nav.slice(1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-lime-300">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
