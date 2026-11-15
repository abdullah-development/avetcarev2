import type { MetadataRoute } from "next";
import { areas, products } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1],
    ["/products", 0.9],
    ["/cleaning-areas", 0.8],
    ["/about", 0.7],
    ["/contact", 0.7],
    ["/info-center", 0.5],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority })),
    ...products.map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(p.hero)],
    })),
    ...areas.map((a) => ({
      url: absoluteUrl(`/cleaning-areas/${a.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(a.banner)],
    })),
  ];
}
