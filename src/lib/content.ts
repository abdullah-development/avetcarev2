export type Block = {
  title: string;
  eyebrow?: string;
  body: string[];
  image?: string;
  /** true when the image is a lifestyle photo that should fill its frame */
  photo?: boolean;
  bullets?: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string; // meta description
  hero: string;
  card: string;
  intro: string[];
  blocks: Block[];
  highlights?: { title: string; items: string[] }[];
  stats?: { value: string; label: string }[];
  gallery?: { name: string; note?: string; image: string }[];
  downloads?: { label: string; href: string }[];
};

export const products: Product[] = [
  {
    slug: "claraclean",
    name: "ClaraClean®",
    category: "Cleaning system",
    tagline: "Mechanical cleaning power of fabric — activated with nothing but water.",
    description:
      "ClaraClean® dry-impregnated cleaning textiles cut water use by 90% and chemical use by up to 80%. Reload! reusable and Go! disposable systems available in the UAE from AVETCARE.",
    hero: "/images/products/cc1.png",
    card: "/images/claraclean.png",
    intro: [
      "ClaraClean® changes the concept of traditional cleaning by replacing the chemical action of cleaning agents with the mechanical action of the fabric.",
      "It is a highly effective, environmentally friendly system built on dry-loaded, high-quality cleaning textiles. The secret is dry impregnation technology, which fixes cleaning-supporting additives on 100% of the fabric surface after washing. The textiles — and their fast-wetting surfactants — are activated with just water immediately before use.",
    ],
    stats: [
      { value: "90%", label: "less water" },
      { value: "80%", label: "less chemicals" },
      { value: "700×", label: "wash cycles" },
      { value: "80 m²", label: "per mop" },
    ],
    highlights: [
      {
        title: "Sustainability",
        items: [
          "Water consumption reduced by 90% compared to conventional systems.",
          "Dry-impregnation chemicals reduced to a minimum — no cleaning agents needed.",
          "Extremely low proportion of microplastics in ClaraClean® textiles.",
          "New Eco mop covers and cloths made from 100% recycled polyester.",
        ],
      },
      {
        title: "Economic advantages",
        items: [
          "Chemical consumption in maintenance cleaning reduced by up to 80%, eliminating incorrect dosages.",
          "Less training effort — extremely easy for cleaning staff to use.",
          "Higher productivity through greater area performance.",
          "No build-up: surfactants stay on the fibres, giving better results and less re-soiling.",
          "High flexibility thanks to easy storage of dry-impregnated textiles.",
        ],
      },
    ],
    blocks: [
      {
        eyebrow: "Reusable",
        title: "ClaraClean® Reload! reusable system",
        image: "/images/products/cc4.png",
        body: [
          "A sustainable and economical solution. Durable, high-quality reusable textiles are washed after use, reloaded and reused — delivering thorough, efficient cleaning across many areas of application.",
          "A wide range of mops in different sizes and materials suits a wide range of tasks. The concept reduces waste and promotes sustainable working practices — ideal for organisations that value ecological and economical cleaning.",
        ],
      },
      {
        eyebrow: "Disposable",
        title: "ClaraClean® Go! disposable system",
        image: "/images/products/cc5.png",
        body: [
          "High-quality single-use textiles offer a convenient, hygienic solution. Mops are available in different sizes and loads, making the system highly versatile.",
          "After use, wipes are simply disposed of — no washing or drying required. Ideal for hospitals, hotels, offices and other hygiene-critical environments.",
        ],
      },
      {
        eyebrow: "The process",
        title: "Textile-oriented cleaning, activated by water",
        image: "/images/products/water-drop.jpg", photo: true,
        body: [
          "ClaraClean® Reload! is the unique system of dry-loaded cleaning textiles — the only system in the world with textile-oriented cleaning. Activation takes place only with water.",
        ],
        bullets: [
          "Up to 80 square metres of area per mop",
          "At least 700× washing and wiping",
          "Minimum 700× high-performance cleaning",
          "80% reduction in cleaning agents",
        ],
      },
    ],
  },
  {
    slug: "claraclean-ozone",
    name: "ClaraClean® Ozone",
    category: "Ozone water generators",
    tagline: "Chemical-free sanitation from 100% natural tap water.",
    description:
      "ClaraClean® Ozone generators produce ozonated water on site — eliminating 99.999% of germs in 5 seconds with no chemicals. ClaraClean® click! 150 and EOS ozone generators in the UAE.",
    hero: "/images/products/cco1.png",
    card: "/images/products/cco3.jpg",
    intro: [
      "ClaraClean® Ozone is an innovative solution for effective sanitation. The system produces ozone water — a natural cleaning, washing and dishwashing agent that efficiently eliminates germs, bacteria and odours.",
      "An ozone water generator enables continuous on-site generation, saving time and cost. The applications for ozonated water are limitless: rely on ClaraClean® Ozone for a hygienic, healthy environment with no chemicals — just tap water.",
    ],
    stats: [
      { value: "99.999%", label: "germ reduction" },
      { value: "5 s", label: "contact time" },
      { value: "90%", label: "chemical savings" },
      { value: "100%", label: "tap water" },
    ],
    blocks: [
      {
        eyebrow: "Nature as a model",
        title: "Active oxygen",
        image: "/images/products/cco2.png",
        body: [
          "Active oxygen is ozonated water used for sanitation and cleaning. A generator produces O₃ through electrolysis, which binds in the water to become ready-to-use ozonated water.",
          "Loaded with ozone, the water effectively attacks bacteria, yeast, mould, viruses and dirt, breaking them down into fine particles. Once the job is done it reverts to water and oxygen — disposal poses no danger or environmental risk.",
        ],
      },
      {
        eyebrow: "Compact generator",
        title: "ClaraClean® click! 150",
        image: "/images/products/cco3.jpg", photo: true,
        body: [
          "With the latest electrolysis technology, click! 150 is a unique ozone water generator in small format. At the push of a button it produces ozonated water to clean and hygienise surfaces or hands.",
          "Its technology has been tested and verified by SGS, a global leader in testing and certification. Laboratory tests at the School of Health and Life Sciences, University of the West of Scotland confirm effectiveness against viruses including coronaviruses — with a germ reduction of up to 99.999% in just 5 seconds of contact time.",
        ],
      },
    ],
    highlights: [
      {
        title: "Advantages of ozone generators",
        items: [
          "100% natural tap water without added chemicals or other additives",
          "Lower emissions — no chemicals to produce or transport",
          "No waste",
          "Energy saving: wash hygienically with cold water",
          "No chemical residues in the water",
        ],
      },
      {
        title: "Economic advantages",
        items: [
          "Latest electrolysis technology for maximum work safety and effectiveness",
          "Permanently available — no need to restock chemicals",
          "Efficient processes thanks to the simplest handling",
          "No storage, transport or disposal costs",
          "High savings potential on chemicals and energy; low investment and maintenance costs",
        ],
      },
    ],
    gallery: [
      { name: "EOS7211", image: "/images/products/ccoBlock1.png" },
      { name: "EOS7177", image: "/images/products/ccoBlock2.png" },
      { name: "EOS7178", image: "/images/products/ccoBlock3.png" },
    ],
    downloads: [
      { label: "Ozone generators flyer (EN)", href: "/pdf/ozone-generators.pdf" },
      { label: "Effects on bacteria & viruses — study", href: "/pdf/ozone-effects-on-bacteria-viruses.pdf" },
    ],
  },
  {
    slug: "drizz-spray-mop-systems",
    name: "DRiZZ® Spray Mop Systems",
    category: "Spray mops",
    tagline: "The only multi-patented spray mop with colour-coded pressure bottles.",
    description:
      "DRiZZ® spray mop systems: multi-patented, colour-coded pressure bottles, robust aluminium nozzles and ergonomic design. DRiZZ® F and Easy DRiZZ® available in the UAE from AVETCARE.",
    hero: "/images/products/sms4.png",
    card: "/images/mop.png",
    intro: [
      "DRiZZ® is the only multi-patented spray mop system with interchangeable, colour-coded pressure bottles for quick cleaning. Large, robust aluminium nozzles produce a rich spray pattern, and massively reinforced plastic elements make it suitable for professional work under beds and chairs.",
      "Forget carrying water — benefit from the light, ergonomic handling of AVETCARE spray mops.",
    ],
    highlights: [
      {
        title: "How it works",
        items: [
          "A few simple pumping movements build up the pressure completely.",
          "A light press on the ergonomic SoftTouch trigger starts DRiZZ®.",
          "A calculated spray angle wets the wiping textile optimally.",
          "The flat, lightweight Ecoquick holder glides easily and precisely — corners included.",
        ],
      },
    ],
    blocks: [
      {
        eyebrow: "Velcro holder",
        title: "DRiZZ® F",
        image: "/images/products/sms2.jpg", photo: true,
        body: [
          "The DRiZZ® F spray mop with Velcro holder revolutionises floor cleaning with efficient, time-saving technology. Fill the tank with water or cleaning agent, activate, and a fine spray distributes liquid across the floor.",
          "Stubborn dirt is easily removed, and the ergonomic design makes DRiZZ® F an indispensable helper for professional cleaning. Lugging buckets is a thing of the past.",
        ],
      },
      {
        eyebrow: "Entry level",
        title: "Easy DRiZZ®",
        image: "/images/products/sms3.jpg", photo: true,
        body: [
          "An innovative device defined by easy handling and robust design. A generous 500 ml water reservoir in the handle enables efficient cleaning of all water-resistant floors, with a regulated release for thorough, quick cleaning of large areas.",
          "Suitable for beginners and experienced users alike — and the ideal introduction to the ClaraClean® system.",
        ],
      },
      {
        eyebrow: "The system",
        title: "DRiZZ® spray mop systems",
        image: "/images/products/sms1.png",
        body: [
          "An integrated spray mechanism and easy-to-replace mop covers deliver efficient, time-saving floor cleaning. Fill, spray and glide — high-quality mops remove dirt and leave streak-free surfaces.",
        ],
      },
    ],
  },
  {
    slug: "cleaning-textiles",
    name: "Cleaning Textiles",
    category: "Mop covers & cloths",
    tagline: "Microfibre mop covers and surface cloths for every cleaning task.",
    description:
      "Professional microfibre mop covers and surface cloths from AVETCARE — dry-loaded, machine washable, Nordic Swan certified ClaraClean® Reload! textiles with 97% germ reduction.",
    hero: "/images/products/ct1.png",
    card: "/images/textile-cleaning.png",
    intro: [
      "Our high-quality cleaning textiles offer effective solutions for thorough cleaning — from microfibre cloths to mop covers and cleaning cloths from our ECO series. Highly absorbent materials and durable quality ensure optimal results for efficient, hygienic cleaning.",
    ],
    blocks: [
      {
        eyebrow: "Mops",
        title: "AVETCARE mop covers",
        image: "/images/products/ct2.png",
        body: [
          "An extensive selection of wiping and mop covers for different tasks and devices — in different sizes, with Velcro, pocket or tab fastenings, and versatile fibres with different dry loads. Dusting, removing dirt or picking up water: there's a cover for every area, from sanitary to kitchen.",
          "The right choice is crucial for efficient cleaning. Dry-loaded covers are available too — simply add tap water and get started.",
        ],
      },
      {
        eyebrow: "Surfaces",
        title: "AVETCARE surface cloths",
        image: "/images/products/ct3.png",
        body: [
          "High-quality materials and an innovative structure deliver high dirt absorption and gentle cleaning — for dusting, removing stains or polishing.",
          "Durable, reusable and machine washable. Many of our cloths are dry-loaded: add tap water to activate the surfactants, and reload them in the washing machine after use.",
        ],
      },
      {
        eyebrow: "Nature as a model",
        title: "ClaraClean® Reload! textiles",
        image: "/images/products/microfiber.jpg", photo: true,
        body: [
          "Textiles for the highest demands, suited to the patented ClaraClean® Reload! loading process. Water-split microfibre textiles are loaded with surfactants — awarded the highest Ecolabel for environmentally friendly production, with the lowest microplastic level.",
        ],
        bullets: ["Lowest microplastic level", "Nordic Swan Ecolabel", "HACCP compliant", "97% germ reduction"],
      },
    ],
  },
  {
    slug: "cleaning-trolley",
    name: "Cleaning Trolleys",
    category: "Trolleys & carts",
    tagline: "Modular trolleys made from 90% recycled PET.",
    description:
      "ClaraClean® modular cleaning trolley (90% recycled PET), Phailon transport trolley and mop carts for hotels, hospitals and offices in the UAE — supplied by AVETCARE.",
    hero: "/images/products/cw1.png",
    card: "/images/cleaningkart.png",
    intro: [
      "Discover the ClaraClean® Trolley — our solution for efficient cleaning organisation. This modular trolley offers tailor-made options for every need, with organised storage and quick access to supplies.",
      "With a modern design, environmentally friendly production from 90% recycled PET and compatibility with various cleaning systems, it is the ideal choice for effective, sustainable cleaning processes.",
    ],
    stats: [{ value: "90%", label: "recycled PET" }],
    blocks: [
      {
        eyebrow: "Transport",
        title: "Phailon transport trolley",
        image: "/images/products/cw2.png",
        body: [
          "A versatile, practical trolley for transporting cleaning products, textiles and equipment. Robust construction and high load capacity make it ideal for warehouses, workshops, offices, hotels and industrial areas.",
          "Smooth-running wheels and ergonomic handling make movement effortless, optimising the cleaning of different rooms and making work processes more effective.",
        ],
      },
      {
        eyebrow: "Floors",
        title: "Mop cart",
        image: "/images/products/cw3.png",
        body: [
          "An essential tool for efficient, thorough floor cleaning in commercial and industrial environments. A spacious shelf holds cleaning agents and accessories — no more running back and forth.",
          "The integrated press wrings out the mop effortlessly for optimal moisture control, and smooth-running wheels reach even hard-to-access areas.",
        ],
      },
    ],
    downloads: [{ label: "ClaraClean® Trolley brochure (EN)", href: "/pdf/claraclean-trolley.pdf" }],
  },
  {
    slug: "syr",
    name: "SYR Cleaning Tools",
    category: "Professional tools",
    tagline: "Colour-coded professional buckets, brushes and squeegees.",
    description:
      "SYR professional cleaning tools in the UAE: full mop sets, bucket wringers, floor squeegees, interchangeable handles, brushes, tool kits and safety signs from AVETCARE.",
    hero: "/images/syr/syr-2.jpg",
    card: "/images/rgg1.png",
    intro: [
      "SYR professional cleaning tools are built for demanding commercial environments — robust, colour-coded and designed to work together as one system.",
    ],
    blocks: [],
    gallery: [
      { name: "SYR Full Set", note: "Blue", image: "/images/syr/syr-2.jpg" },
      { name: "SYR Mop Bucket / Wringer", image: "/images/syr/syr-1.jpg" },
      { name: "SYR Floor Squeegee", image: "/images/syr/syr-3.jpg" },
      { name: "SYR Interchangeable Handle", image: "/images/syr/syr-4.jpg" },
      { name: "SYR Ultimate Socket A", image: "/images/syr/syr-5.jpg" },
      { name: "SYR Hang On Bucket", image: "/images/syr/syr-6.jpg" },
      { name: "SYR Long Brush", image: "/images/syr/syr-7.jpg" },
      { name: "SYR Grout Brush", note: "Soft brush", image: "/images/syr/syr-8.jpg" },
      { name: "SYR Secretor Brush", note: "Hard brush", image: "/images/syr/syr-9.jpg" },
      { name: "Ultimate 1 & 3 Side Tool Kit", image: "/images/syr/syr-10.jpg" },
      { name: "Warning Sign", image: "/images/syr/syr-11.jpg" },
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  banner: string;
  intro: string[];
  lead: string;
  benefits: string[];
  closing: string;
};

export const areas: Area[] = [
  {
    slug: "health-care",
    name: "Health Care",
    short: "Comprehensive system solutions tailored for daily maintenance in hospitals and care facilities.",
    description:
      "Hospital and healthcare cleaning equipment in the UAE. AVETCARE system solutions eliminate germs, help prevent hospital-acquired infections and streamline daily maintenance.",
    image: "/images/areas/health-care.jpg",
    banner: "/images/areas/health-care.jpg",
    intro: [
      "Elevate your healthcare facility's cleaning regimen with comprehensive system solutions tailored for daily maintenance. Whether it's a bustling hospital or a cosy care facility, our products ensure optimal cleanliness and hygiene while streamlining your procedures for maximum efficiency.",
    ],
    lead: "Discover the advantages of the AVETCARE range:",
    benefits: [
      "Thorough elimination of dirt and harmful germs.",
      "Safeguarding patients, staff and visitors against hospital-acquired infections.",
      "A pristine environment conducive to healing and recovery.",
      "An enhanced reputation for your healthcare establishment.",
    ],
    closing:
      "Experience the transformative power of our solutions as you prioritise the well-being and safety of those in your care.",
  },
  {
    slug: "office-and-business",
    name: "Office & Business",
    short: "Cutting-edge cleaning solutions for healthier, more productive workplaces.",
    description:
      "Office and commercial cleaning equipment in Dubai. AVETCARE products raise health standards, boost productivity and protect your facilities — sustainably.",
    image: "/images/areas/office.jpg",
    banner: "/images/areas/office.jpg",
    intro: [
      "Create a workspace that prioritises the health and comfort of your employees with cutting-edge cleaning solutions tailored for office and business premises.",
    ],
    lead: "Choose AVETCARE for your workplace and unlock:",
    benefits: [
      "Enhanced health and safety standards for a productive environment.",
      "Boosted employee morale and efficiency.",
      "Longer life for facilities and equipment through effective maintenance.",
      "A stronger brand image with a consistently clean, inviting workspace.",
    ],
    closing:
      "Our gentle yet effective formulations are surface-friendly and environmentally responsible — aligned with your commitment to sustainability.",
  },
  {
    slug: "schools-and-universities",
    name: "Schools & Universities",
    short: "Clean, safe and sustainable learning environments for students and staff.",
    description:
      "School and university cleaning equipment in the UAE. Sustainable AVETCARE solutions keep campuses safe, hygienic and well maintained.",
    image: "/images/areas/schools.jpg",
    banner: "/images/areas/schools.jpg",
    intro: [
      "Maintaining cleanliness and hygiene in educational institutions is paramount to fostering a conducive learning environment for students, educators and staff alike.",
    ],
    lead: "The benefits of AVETCARE in your cleaning protocols:",
    benefits: [
      "Enhanced health and safety standards across campus.",
      "Sustainable, eco-friendly solutions that promote environmental responsibility.",
      "Prolonged durability of facilities and equipment.",
    ],
    closing:
      "Create a clean, safe and sustainable educational setting where students can thrive and excel.",
  },
  {
    slug: "hotel-and-catering",
    name: "Hotel & Catering",
    short: "Stringent hygiene for guest areas, kitchens and laundry facilities.",
    description:
      "Hotel, restaurant and catering cleaning supplies in Dubai. AVETCARE solutions raise hygiene standards, cut chemical use and simplify housekeeping.",
    image: "/images/areas/hotel.jpg",
    banner: "/images/areas/hotel.jpg",
    intro: [
      "Cleanliness and hygiene in hotels and restaurants are paramount, with stringent standards across guest areas, kitchens and laundry facilities. AVETCARE offers comprehensive solutions tailored to the hospitality industry.",
    ],
    lead: "Advantages for your hotel or restaurant:",
    benefits: [
      "Thorough elimination of dirt and germs for guests and staff alike.",
      "Streamlined cleaning processes that save time and resources.",
      "Higher guest satisfaction in clean, hygienic surroundings.",
      "Reduced chemical consumption — saving cost and supporting sustainability.",
      "A single point of contact for all your cleaning and laundry needs.",
    ],
    closing: "Elevate cleanliness standards and enhance the overall experience for your guests.",
  },
  {
    slug: "malls-and-shopping-centers",
    name: "Malls & Shopping Centres",
    short: "High-performance, eco-friendly cleaning for busy retail environments.",
    description:
      "Mall, supermarket and shopping centre cleaning equipment in the UAE. High-performance AVETCARE solutions for large areas with less water and chemicals.",
    image: "/images/areas/mall.jpg",
    banner: "/images/areas/mall.jpg",
    intro: [
      "Maintaining cleanliness in shopping centres and supermarkets is essential for a welcoming, hygienic environment for shoppers and staff. AVETCARE provides eco-friendly, efficient solutions tailored for bustling retail spaces.",
    ],
    lead: "Integrate AVETCARE into your cleaning protocols for:",
    benefits: [
      "High-performance solutions designed for large areas.",
      "Lower water and chemical consumption.",
      "Higher shopper satisfaction in a clean, hygienic environment.",
      "No floor build-up — less re-soiling and maintenance.",
    ],
    closing: "Elevate cleanliness standards and create a pleasant shopping environment for your customers.",
  },
  {
    slug: "sports-facilities",
    name: "Sports Facilities",
    short: "Dependable hygiene for gyms, stadiums, locker rooms and equipment.",
    description:
      "Gym, stadium and sports facility cleaning equipment in Dubai. AVETCARE removes dirt and bacteria from floors, locker rooms and workout equipment.",
    image: "/images/areas/sports.jpg",
    banner: "/images/areas/sports.jpg",
    intro: [
      "Gyms, stadiums and sports facilities are hubs for fitness enthusiasts and athletes, making cleanliness a top priority. Our products reliably remove dirt and bacteria from floors, restrooms, locker rooms and workout equipment.",
    ],
    lead: "The benefits for your gym or sports facility:",
    benefits: [
      "Reliable elimination of dirt and bacteria.",
      "A fresh, hygienic space that keeps members coming back.",
      "Longer lifespan for facilities and equipment.",
    ],
    closing: "Elevate cleanliness standards and promote a safe, enjoyable fitness experience for all.",
  },
];

export const reasons = [
  {
    title: "Health & Safety",
    icon: "/images/health-safety.png",
    body: "Regular cleaning reduces the spread of germs and allergens, creating a healthier space for living, working and leisure.",
  },
  {
    title: "Productivity Boost",
    icon: "/images/boosts.png",
    body: "Clean, organised spaces minimise distractions, sharpen focus and foster a more efficient work environment.",
  },
  {
    title: "Longevity of Assets",
    icon: "/images/assets.png",
    body: "Removing dirt and contaminants prevents wear and tear — saving on maintenance and replacement costs.",
  },
  {
    title: "Environmental Responsibility",
    icon: "/images/environment.png",
    body: "Green cleaning reduces harmful chemicals and minimises the impact on ecosystems.",
  },
  {
    title: "Image & Reputation",
    icon: "/images/reputation.png",
    body: "Cleanliness signals professionalism and attention to detail, leaving a positive impression on every visitor.",
  },
];

export const clients = [
  { name: "BSBG", logo: "/images/clients/bsbg_logo2.png" },
  { name: "Extramile Interiors", logo: "/images/clients/extramile_interiors_logo1.png" },
  { name: "Lambent", logo: "/images/clients/lambent_logo2.png" },
  { name: "Al Asfoor Group", logo: "/images/clients/al_asfoor_group_logo1.png" },
  { name: "The Design District", logo: "/images/clients/thedesigndistrict_logo2.png" },
  { name: "Winteriors Decors", logo: "/images/clients/winteriors_decors_llc1.png" },
  { name: "PZA Interiors", logo: "/images/clients/pza_interiors_logo1.png" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
