export const site = {
  name: "Stan's Auto Detailing",
  tagline: "Driven by Perfection.",
  domain: "https://www.stansautodetailing.com",
  phone: "315-380-4885",
  phoneHref: "tel:+13153804885",
  smsHref: "sms:+13153804885",
  instagram: "https://instagram.com/stansautodetailing",
  // TODO before launch: confirm Facebook page URL with Stan (hidden while null)
  facebook: null as string | null,
  // Stan's existing Urable virtual shop (same link the old site's Book Online used)
  bookingUrl: "https://app.urable.com/virtual-shop/PBpTuJhP7pQAsuP902hH",
  googleReviewUrl:
    "https://www.google.com/search?q=Stan%27s+Auto+Detailing+Raleigh+NC",
  serviceAreaLabel: "Raleigh–Durham & the Triangle, NC",
};

export type Package = {
  slug: string;
  eyebrow: string;
  name: string;
  priceCoupe: number;
  priceTruck: number;
  time: string;
  blurb: string;
  includes: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: "exterior-detail",
    eyebrow: "Exterior",
    name: "Exterior Detail",
    priceCoupe: 75,
    priceTruck: 100,
    time: "1–1.5 hours",
    blurb:
      "A meticulous hand wash and finish that brings the shine back without ever touching an automated brush.",
    includes: [
      "Professional handwash & foam bath",
      "Bug splatter removal",
      "Exterior windows cleaned & streak-free",
      "Wheels & rims deep cleaned & dressed",
      "Plastic trim dressed & shined",
    ],
  },
  {
    slug: "full-detail",
    eyebrow: "Best value",
    name: "Full Detail",
    priceCoupe: 175,
    priceTruck: 200,
    time: "3–4 hours",
    blurb:
      "The complete reset, inside and out. Everything in the Exterior and Interior details in a single visit.",
    includes: [
      "Everything in Exterior Detail",
      "Everything in Interior Detail",
    ],
    featured: true,
  },
  {
    slug: "interior-detail",
    eyebrow: "Interior",
    name: "Interior Detail",
    priceCoupe: 125,
    priceTruck: 150,
    time: "2–3 hours",
    blurb:
      "A deep clean of the cabin — every surface, crack, and crevice — so it looks and smells new again.",
    includes: [
      "Detailed vacuum of floors, carpets & trunk",
      "Thorough wipe-down of all interior surfaces",
      "Plastics cleaned (dash, door panels & more)",
      "Cracks + crevices detailed",
      "Floor mats cleaned",
      "Leather conditioned",
      "Interior windows cleaned & streak-free",
      "Door jambs cleaned",
      "Trunk cleaned",
    ],
  },
];

export const addOns = [
  {
    name: "Clay Bar & Paint Decontamination",
    blurb:
      "Pulls embedded contaminants out of the clear coat and leaves the paint glass-smooth.",
  },
  {
    name: "Carpet & Seat Extraction",
    blurb:
      "Hot-water extraction that lifts stains and set-in grime out of fabric seats and carpet.",
  },
  {
    name: "Steam Cleaning",
    blurb:
      "High-temperature steam that sanitizes surfaces and reaches where towels can't.",
  },
  {
    name: "Headlight Restoration",
    blurb:
      "Wet-sands and polishes oxidized lenses back to optical clarity for safer night driving.",
  },
  {
    name: "Trim Restoration",
    blurb:
      "Restores faded exterior plastic and rubber to a deep, factory-fresh black.",
  },
  {
    name: "Engine Bay Cleaning",
    blurb:
      "Careful degrease and dress of the engine compartment, safe for sensitive electronics.",
  },
];

export const premiumServices = [
  {
    name: "Ceramic Coating",
    blurb:
      "A semi-permanent SiO2 layer that bonds to your clear coat, repelling water, grime, and UV for years — priced by vehicle and paint condition.",
  },
  {
    name: "Paint Correction",
    blurb:
      "Machine polishing that levels swirl marks, light scratches, and oxidation for a mirror finish — priced after a quick paint inspection.",
  },
];

// NOTE: sample tiers — pricing must be confirmed with Stan before launch.
export const memberships = [
  {
    name: "The Daily",
    cadence: "monthly",
    price: 135,
    per: "month",
    blurb:
      "Essential care for the daily driver. One full reset every month, always on the schedule.",
    perks: [
      "1 Full Detail every month",
      "10% off all add-on services",
      "Priority scheduling",
      "Cancel or pause anytime",
    ],
  },
  {
    name: "The Enthusiast",
    cadence: "bi-weekly",
    price: 250,
    per: "month",
    blurb:
      "For those who demand perfection. Your vehicle never goes more than two weeks without a professional touch.",
    perks: [
      "Full Detail every two weeks",
      "15% off all add-on services",
      "Free trim dressing each visit",
      "Priority scheduling",
      "Cancel or pause anytime",
    ],
    featured: true,
  },
  {
    name: "The Collector",
    cadence: "weekly",
    price: 450,
    per: "month",
    blurb:
      "Showroom-ready, always. Weekly exterior care plus a monthly deep clean of the cabin.",
    perks: [
      "Exterior Detail every week",
      "Full interior reset every month",
      "20% off all add-on services",
      "First pick of scheduling windows",
      "Cancel or pause anytime",
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  blurb: string;
};

export const areas: Area[] = [
  {
    slug: "raleigh",
    name: "Raleigh",
    blurb:
      "Home base. From North Hills and Five Points driveways to downtown parking decks, most Raleigh appointments — Midtown, ITB, Brier Creek, and beyond — are serviced same-week.",
  },
  {
    slug: "durham",
    name: "Durham",
    blurb:
      "Full mobile coverage across Durham — home, office, or job site, including Duke and RTP campuses.",
  },
  {
    slug: "cary",
    name: "Cary",
    blurb:
      "A regular stop on the schedule. Driveway and office-park details throughout Cary and Preston.",
  },
  {
    slug: "apex",
    name: "Apex",
    blurb:
      "Serving Apex neighborhoods and businesses with the same driveway-side attention to detail.",
  },
  {
    slug: "wake-forest",
    name: "Wake Forest",
    blurb:
      "North Wake coverage including Wake Forest, Rolesville, and surrounding communities.",
  },
  {
    slug: "morrisville",
    name: "Morrisville",
    blurb:
      "Convenient scheduling for Morrisville homes and the RTP corridor.",
  },
  {
    slug: "holly-springs",
    name: "Holly Springs",
    blurb:
      "Serving Holly Springs and Twelve Oaks with full interior and exterior packages.",
  },
  {
    slug: "fuquay-varina",
    name: "Fuquay-Varina",
    blurb:
      "Southern Wake County coverage — we come to you in Fuquay-Varina and Willow Spring.",
  },
  {
    slug: "garner",
    name: "Garner",
    blurb:
      "Quick access from Raleigh means flexible scheduling windows across Garner.",
  },
  {
    slug: "knightdale",
    name: "Knightdale",
    blurb:
      "East Wake coverage including Knightdale, Wendell, and Zebulon.",
  },
];

// Real quotes from the Google Business Profile (5.0, 31 reviews).
export const reviews = [
  {
    quote:
      "The best experience all around! Excellent service, communication and my car hasn't looked this clean since I bought it! I will be coming back!",
    name: "Liam R.",
  },
  {
    quote:
      "Very pleased with the level of care and attention to detail (literally)! Highly recommended to anyone who wants their car to look like it just left the dealership.",
    name: "Jessica I.",
  },
  {
    quote:
      "Our vehicles take a beating with having kids and being used for work, but they look better than ever. Highly recommend!",
    name: "Aaron W.",
  },
];

export const faqs = [
  {
    q: "Do I need to provide water or electricity?",
    a: "In most cases access to a standard outdoor spigot and outlet is all we need. If your location doesn't have either — an office park or parking deck, for example — mention it when you book and we'll plan accordingly.",
  },
  {
    q: "How long does a detail take?",
    a: "An Exterior Detail typically runs about an hour to an hour and a half, an Interior Detail two to three hours, and a Full Detail three to four depending on the vehicle's size and condition.",
  },
  {
    q: "What happens if it rains?",
    a: "Weather can affect our ability to service your vehicle. If conditions look bad we'll reach out ahead of your appointment and find the next window that works for you — no fees, no hassle.",
  },
  {
    q: "Where do you go?",
    a: "We serve Raleigh, Durham, Cary, Apex, and the surrounding Triangle. Home driveways, office lots, and job sites are all fair game — if you're nearby but outside these areas, text us and we'll try to make it work.",
  },
  {
    q: "How do I pay?",
    a: "Payment is due when the job is done and you've walked around the vehicle. Cash and all major cards are accepted.",
  },
];
