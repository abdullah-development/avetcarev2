import Image from "next/image";
import Link from "next/link";
import ProductFrame from "./ProductFrame";

export type Crumb = { name: string; href: string };

export default function PageHero({
  title,
  eyebrow,
  lead,
  image,
  crumbs,
  product,
}: {
  title: string;
  eyebrow?: string;
  lead?: string;
  image: string;
  crumbs: Crumb[];
  /** Optional product photo shown whole in a framed panel beside the title. */
  product?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-forest-950 pt-32 pb-16 sm:pb-20">
      <Image quality={85} src={image} alt="" fill priority sizes="100vw" className={`-z-20 object-cover ${product ? "opacity-25" : "opacity-60"}`} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
      <div className={`container-x ${product ? "grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-white">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-white">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow !text-lime-300">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-medium !text-white sm:text-6xl lg:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>}
        </div>
        {product && (
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur">
            <ProductFrame src={product} alt={title} sizes="(min-width: 1024px) 40vw, 100vw" priority className="aspect-square !rounded-[1.5rem] !border-0" />
          </div>
        )}
      </div>
    </section>
  );
}
