"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavigationMenu as NavPrimitive } from "radix-ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { areas, products } from "@/lib/content";
import { nav, site } from "@/lib/site";

function Underline({ solid }: { solid: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover/nav:w-5 ${
        solid ? "bg-leaf-500" : "bg-lime-300"
      }`}
    />
  );
}

function ProductsPanel() {
  return (
    <div className="grid w-[46rem] grid-cols-[15rem_1fr] gap-2 p-2">
      <NavPrimitive.Link asChild>
        <Link
          href="/products"
          className="group/feat relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-forest-900 p-6 !text-white"
        >
          <Image quality={85} src="/images/products-hero.jpg" alt="" fill sizes="240px" className="-z-20 object-cover opacity-40 transition duration-700 group-hover/feat:scale-110" />
          <span className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
          <span className="text-[0.65rem] font-bold tracking-[0.2em] text-lime-300 uppercase">Our range</span>
          <span className="mt-2 font-display text-2xl leading-tight">Sustainable cleaning systems</span>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition group-hover/feat:gap-2.5 group-hover/feat:text-white">
            View all products <ArrowRight className="size-4" />
          </span>
        </Link>
      </NavPrimitive.Link>
      <ul className="grid grid-cols-2 gap-1">
        {products.map((p) => (
          <li key={p.slug}>
            <NavPrimitive.Link asChild>
              <Link
                href={`/products/${p.slug}`}
                className="group/item flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-sand-100"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-sand-200 bg-white transition group-hover/item:border-leaf-500/40 group-hover/item:shadow-md">
                  <Image src={p.hero} alt="" fill sizes="56px" className="object-contain p-1.5 mix-blend-multiply transition duration-500 group-hover/item:scale-110" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-ink-900 transition group-hover/item:text-leaf-600">{p.name}</span>
                  <span className="block truncate text-xs text-ink-500">{p.category}</span>
                </span>
              </Link>
            </NavPrimitive.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AreasPanel() {
  return (
    <div className="w-[38rem] p-2">
      <ul className="grid grid-cols-2 gap-1">
        {areas.map((a) => (
          <li key={a.slug}>
            <NavPrimitive.Link asChild>
              <Link
                href={`/cleaning-areas/${a.slug}`}
                className="group/item flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-sand-100"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image quality={85} src={a.image} alt="" fill sizes="56px" className="object-cover transition duration-500 group-hover/item:scale-110" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink-900 transition group-hover/item:text-leaf-600">{a.name}</span>
                  <span className="line-clamp-1 text-xs text-ink-500">{a.short}</span>
                </span>
              </Link>
            </NavPrimitive.Link>
          </li>
        ))}
      </ul>
      <NavPrimitive.Link asChild>
        <Link
          href="/cleaning-areas"
          className="group/all mt-1 flex items-center justify-between rounded-2xl bg-sand-100 px-4 py-3 text-sm font-semibold text-forest-900 transition hover:bg-forest-900 hover:!text-white"
        >
          Explore all cleaning areas
          <ArrowRight className="size-4 transition group-hover/all:translate-x-1" />
        </Link>
      </NavPrimitive.Link>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const solid = scrolled;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  // Explicit (important) colours so shadcn's trigger defaults can never blank out the label.
  const triggerClass = (href: string) =>
    isActive(href)
      ? solid
        ? "!bg-forest-900 !text-white hover:!bg-leaf-600 data-open:!bg-leaf-600"
        : "!bg-white/20 !text-white hover:!bg-white/30 data-open:!bg-white/30"
      : solid
        ? "!bg-transparent !text-ink-700 hover:!bg-sand-100 hover:!text-leaf-600 data-open:!bg-sand-100 data-open:!text-leaf-600"
        : "!bg-transparent !text-white/85 hover:!bg-white/10 hover:!text-white data-open:!bg-white/10 data-open:!text-white";
  const linkClass = (href: string) =>
    `group/nav relative block rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
      isActive(href)
        ? solid
          ? "bg-forest-900 text-white hover:bg-leaf-600 hover:text-white"
          : "bg-white/20 text-white hover:bg-white/30 hover:text-white"
        : solid
          ? "text-ink-700 hover:bg-sand-100 hover:text-leaf-600"
          : "text-white/85 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(6,35,26,0.25)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label={`${site.shortName} home`} className="group relative z-10 flex items-center gap-2.5">
          <Image src="/images/leaf.png" alt="" width={44} height={44} priority className="h-10 w-10 transition duration-500 group-hover:-rotate-12 group-hover:scale-110" />
          <span className="flex flex-col leading-none">
            <span
              className={`text-xl font-extrabold tracking-[0.14em] transition-all duration-300 group-hover:tracking-[0.18em] sm:text-2xl ${
                solid ? "text-ink-900 group-hover:text-leaf-600" : "text-white group-hover:text-lime-300"
              }`}
            >
              AVETCARE
            </span>
          </span>
        </Link>

        <NavigationMenu viewport={false} aria-label="Main" className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {nav.map((item) => {
              const menu = item.href === "/products" ? "products" : item.href === "/cleaning-areas" ? "areas" : null;
              if (!menu) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavPrimitive.Link asChild>
                      <Link href={item.href} className={linkClass(item.href)}>
                        {item.label}
                        {!isActive(item.href) && <Underline solid={solid} />}
                      </Link>
                    </NavPrimitive.Link>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger
                    className={`relative !inline-flex h-auto items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition duration-300 [&>svg]:static [&>svg]:ml-0 [&>svg]:size-4 [&>svg]:opacity-70 ${triggerClass(item.href)}`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!top-full !left-1/2 !mt-4 -translate-x-1/2 !overflow-visible !rounded-3xl !border !border-sand-200 !bg-white !p-0 !shadow-[0_30px_80px_-20px_rgba(6,35,26,0.35)] !ring-0">
                    {menu === "products" ? <ProductsPanel /> : <AreasPanel />}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary !py-2.5">
            Get a quote
          </Link>
        </div>

        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={`relative z-10 grid h-11 w-11 place-items-center rounded-full transition duration-300 lg:hidden ${
                solid ? "bg-forest-900 text-white hover:bg-leaf-600" : "bg-white/15 text-white backdrop-blur hover:bg-white/30"
              }`}
            >
              <Menu className="size-5" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="!w-[88vw] !max-w-sm !rounded-l-[2rem] !border-0 !bg-sand-50 lg:hidden">
            <div className="flex items-center justify-between border-b border-sand-200 px-5 py-4">
              <DrawerTitle asChild>
                <Link href="/" className="flex items-center gap-2.5 !font-sans">
                  <Image src="/images/leaf.png" alt="" width={36} height={36} className="h-9 w-9" />
                  <span className="flex flex-col leading-none">
                    <span className="font-sans text-lg font-extrabold tracking-[0.14em] text-ink-900">AVETCARE</span>
                  </span>
                </Link>
              </DrawerTitle>
              <DrawerDescription className="sr-only">Site navigation</DrawerDescription>
              <DrawerClose asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-700 shadow-sm transition hover:bg-forest-900 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </DrawerClose>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const subs =
                    item.href === "/products"
                      ? products.map((p) => ({ href: `/products/${p.slug}`, label: p.name, img: p.hero, cover: false }))
                      : item.href === "/cleaning-areas"
                        ? areas.map((a) => ({ href: `/cleaning-areas/${a.slug}`, label: a.name, img: a.image, cover: true }))
                        : null;
                  const isOpen = expanded === item.href;
                  return (
                    <li key={item.href}>
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          className={`block flex-1 rounded-2xl px-4 py-3 text-[1.05rem] font-semibold transition ${
                            isActive(item.href)
                              ? "bg-forest-900 text-white"
                              : "text-ink-900 hover:bg-white hover:pl-5 hover:text-leaf-600"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {subs && (
                          <button
                            type="button"
                            aria-label={`${isOpen ? "Hide" : "Show"} ${item.label}`}
                            aria-expanded={isOpen}
                            onClick={() => setExpanded((v) => (v === item.href ? null : item.href))}
                            className={`grid h-12 w-12 place-items-center rounded-2xl transition ${
                              isOpen ? "bg-white text-leaf-600 shadow-sm" : "text-ink-700 hover:bg-white hover:text-leaf-600"
                            }`}
                          >
                            <ChevronDown className={`size-5 transition duration-300 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      {subs && (
                        <ul
                          className={`grid grid-cols-2 gap-2 overflow-hidden px-1 transition-all duration-500 ${
                            isOpen ? "max-h-[48rem] pt-2 pb-3 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {subs.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="group/sub flex h-full flex-col gap-2 rounded-2xl border border-sand-200 bg-white p-2 transition hover:border-leaf-500/40 hover:shadow-md"
                              >
                                <span className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand-50">
                                  <Image
                                    src={sub.img}
                                    alt=""
                                    fill
                                    sizes="160px"
                                    className={`transition duration-500 group-hover/sub:scale-105 ${sub.cover ? "object-cover" : "object-contain p-2 mix-blend-multiply"}`}
                                  />
                                </span>
                                <span className="px-1 pb-1 text-xs leading-snug font-semibold text-ink-900 group-hover/sub:text-leaf-600">
                                  {sub.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-sand-200 bg-white px-5 py-5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { href: site.phoneHref, label: "Call", icon: Phone },
                  { href: site.whatsapp, label: "WhatsApp", icon: MessageCircle, external: true },
                  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
                ].map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex flex-col items-center gap-1.5 rounded-2xl bg-sand-100 py-3 text-xs font-semibold text-ink-700 transition hover:bg-leaf-500 hover:text-white"
                  >
                    <Icon className="size-5" />
                    {label}
                  </a>
                ))}
              </div>
              <Link href="/contact" className="btn-primary w-full">
                Get a quote →
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
