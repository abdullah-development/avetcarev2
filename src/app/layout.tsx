import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Sustainable Cleaning Equipment in Dubai & UAE`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Cleaning equipment",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Sustainable Cleaning Equipment`,
    description: site.description,
    images: [{ url: "/images/welcome.jpg", width: 1200, height: 630, alt: "AVETCARE sustainable cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Sustainable Cleaning Equipment`,
    description: site.description,
    images: ["/images/welcome.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
  // Google Search Console "HTML tag" method — set the content value as an env var on the host.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#0b3226",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      alternateName: ["AVETCARE", "Avet Care", "Avetcare UAE", "Avet Middle East"],
      url: site.url,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png"), width: 192, height: 192 },
      email: site.email,
      telephone: site.phone,
      foundingDate: site.founded,
      description: `${site.description} ${site.about}`,
      disambiguatingDescription: site.about,
      knowsAbout: [
        "Professional cleaning equipment",
        "Colour-coded cleaning systems",
        "Ozone water generators",
        "Spray mop systems",
        "Microfiber cleaning textiles",
        "Cleaning trolleys",
        "Hospital and hotel hygiene",
      ],
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: site.name,
      image: absoluteUrl("/images/welcome.jpg"),
      url: site.url,
      telephone: site.phone,
      email: site.email,
      priceRange: "$$",
      parentOrganization: { "@id": absoluteUrl("/#organization") },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      // Google uses WebSite name/alternateName for the site name shown above search results.
      name: site.shortName,
      alternateName: [site.name, "Avet Care"],
      description: site.description,
      publisher: { "@id": absoluteUrl("/#organization") },
      inLanguage: "en-AE",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={cn(manrope.variable, fraunces.variable, "font-sans")}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
