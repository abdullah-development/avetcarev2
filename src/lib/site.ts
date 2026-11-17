export const site = {
  name: "AVETCARE Middle East",
  shortName: "AVETCARE",
  // www is the primary host: Vercel redirects avetcare.ae → www.avetcare.ae and Google already indexes www.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.avetcare.ae",
  description:
    "AVETCARE Middle East is a Dubai-based supplier of sustainable, colour-coded professional cleaning equipment for hospitals, hotels, offices and schools in the UAE — ClaraClean® systems, ozone water generators, DRiZZ® spray mops, cleaning textiles, trolleys and SYR tools.",
  // Plain-language identity statement for search engines and AI summaries (avoids confusion with
  // similarly named veterinary companies).
  about:
    "AVETCARE Middle East is a professional cleaning equipment company based in Dubai, United Arab Emirates. It is not a veterinary or animal-health business.",
  email: "info@avetcare.ae",
  phone: "+971 50 491 2633",
  phoneHref: "tel:+971504912633",
  whatsapp: "https://wa.me/971504912633",
  address: {
    street: "The Meydan Hotel, Grandstand, 6th floor, Meydan Road",
    locality: "Nad Al Sheba",
    region: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
  },
  geo: { lat: 25.155662833382266, lng: 55.29772627506569 },
  hours: "Monday – Friday, 9:00am – 5:00pm",
  founded: "2011",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.409037360231!2d55.29772627506569!3d25.155662833382266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f688c5516ea0f%3A0x44800f32689f57e2!2sThe%20Meydan%20Hotel!5e0!3m2!1sen!2sae!4v1712089825474!5m2!1sen!2sae",
  keywords: [
    "cleaning equipment UAE",
    "cleaning equipment Dubai",
    "professional cleaning supplies Dubai",
    "ClaraClean",
    "ozone water generator UAE",
    "spray mop system",
    "DRiZZ spray mop",
    "microfiber cleaning textiles",
    "cleaning trolley Dubai",
    "SYR cleaning tools",
    "sustainable cleaning products",
    "colour coded cleaning system",
    "hospital cleaning equipment",
    "hotel cleaning supplies",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/cleaning-areas", label: "Cleaning Areas" },
  { href: "/info-center", label: "Info Center" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
