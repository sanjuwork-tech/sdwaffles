export type MenuCategory = "waffles" | "shakes" | "snacks" | "mocktails";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  tags?: string[];
  badge?: "bestseller" | "viral" | "new" | "chef";
  veg?: boolean;
}

export const CATEGORIES: {
  id: MenuCategory;
  label: string;
  short: string;
  emoji: string;
  blurb: string;
}[] = [
  {
    id: "waffles",
    label: "Waffle Sandwiches",
    short: "Waffles",
    emoji: "🧇",
    blurb: "Golden, crispy & dangerously loaded",
  },
  {
    id: "shakes",
    label: "Shakes & Thick Shakes",
    short: "Thick Shakes",
    emoji: "🥤",
    blurb: "Thick enough to hold your spoon upright",
  },
  {
    id: "snacks",
    label: "Snacks & Burgers",
    short: "Snacks & Burgers",
    emoji: "🍔",
    blurb: "Savoury comfort for the in-between cravings",
  },
  {
    id: "mocktails",
    label: "Mocktails & Refreshers",
    short: "Mocktails",
    emoji: "🍹",
    blurb: "Cool, colourful & crazy refreshing",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ===== WAFFLES =====
  {
    id: "triple-choco-waffle",
    name: "Triple Chocolate Waffle Sandwich",
    description:
      "Warm, sweet Belgian waffle sandwich heavily loaded with three types of rich chocolate — dark, milk & white.",
    price: 189,
    image: "/images/triple-chocolate-waffle.png",
    category: "waffles",
    badge: "bestseller",
    tags: ["Best Seller", "Triple Chocolate"],
    veg: true,
  },
  {
    id: "nutella-waffle",
    name: "Nutella Waffle Sandwich",
    description:
      "Crispy golden waffles hugging a thick, dreamy layer of creamy hazelnut Nutella with crushed hazelnuts.",
    price: 169,
    image: "/images/nutella-waffle.png",
    category: "waffles",
    tags: ["Hazelnut", "Creamy"],
    veg: true,
  },
  {
    id: "double-choco-waffle",
    name: "Double Chocolate Waffles Sandwich",
    description:
      "Chocolate waffles meet rich chocolate ganache and chunks. Double the cocoa, double the obsession.",
    price: 179,
    image: "/images/double-chocolate-waffle.png",
    category: "waffles",
    tags: ["Chocolate", "Loaded"],
    veg: true,
  },
  {
    id: "kitkat-waffle",
    name: "Kit Kat Waffles Sandwich",
    description:
      "Crunchy Kit Kat bars melted into a warm waffle sandwich with chocolate drizzle. Have a break, have it all.",
    price: 175,
    image: "/images/kitkat-waffle.png",
    category: "waffles",
    tags: ["Crunchy", "Wafer"],
    veg: true,
  },

  // ===== SHAKES =====
  {
    id: "ferrero-shake",
    name: "Ferrero Rocher Shake",
    description:
      "Velvety hazelnut-chocolate shake blended with real Ferrero Rocher, crowned with whipped cream & crush.",
    price: 219,
    image: "/images/ferrero-shake.png",
    category: "shakes",
    badge: "chef",
    tags: ["Premium", "Hazelnut"],
    veg: true,
  },
  {
    id: "nutella-brownie-shake",
    name: "Nutella Brownie Thick Shake",
    description:
      "Thick Nutella shake loaded with fudgy brownie chunks. A spoon-mandatory situation.",
    price: 199,
    image: "/images/nutella-brownie-shake.png",
    category: "shakes",
    tags: ["Thick", "Brownie"],
    veg: true,
  },
  {
    id: "brownie-oreo-shake",
    name: "Brownie Oreo Thick Shake",
    description:
      "Brownie bits + Oreo crumble in a thick chocolate shake. Cookies, cream & cocoa in every sip.",
    price: 199,
    image: "/images/brownie-oreo-shake.png",
    category: "shakes",
    tags: ["Thick", "Oreo"],
    veg: true,
  },
  {
    id: "nutella-oreo-shake",
    name: "Nutella Oreo Shake",
    description:
      "Creamy Nutella shake blended with Oreo cookies & topped with whipped cream crumble.",
    price: 189,
    image: "/images/nutella-oreo-shake.png",
    category: "shakes",
    tags: ["Hazelnut", "Oreo"],
    veg: true,
  },
  {
    id: "double-choco-kitkat-shake",
    name: "Double Chocolate Kit Kat Shake",
    description:
      "Double chocolate shake loaded with Kit Kat pieces. Crunch & cocoa together at last.",
    price: 189,
    image: "/images/double-chocolate-kitkat-shake.png",
    category: "shakes",
    tags: ["Chocolate", "Crunchy"],
    veg: true,
  },
  {
    id: "butterscotch-shake",
    name: "Butterscotch Shake",
    description:
      "Golden butterscotch shake with caramel drizzle & crunchy bits. Smooth, sweet & nostalgic.",
    price: 169,
    image: "/images/butterscotch-shake.png",
    category: "shakes",
    tags: ["Caramel", "Classic"],
    veg: true,
  },
  {
    id: "perk-feast-shake",
    name: "Perk Feast Shake",
    description:
      "Creamy chocolate shake loaded with Perk chocolate pieces. A feast in every sip.",
    price: 179,
    image: "/images/perk-feast-shake.png",
    category: "shakes",
    tags: ["Chocolate", "Feast"],
    veg: true,
  },
  {
    id: "5star-shake",
    name: "5 Star Shake",
    description:
      "Caramel-chocolate 5 Star shake topped with whipped cream & 5 Star chunks. Soft, chewy, dreamy.",
    price: 179,
    image: "/images/5star-shake.png",
    category: "shakes",
    tags: ["Caramel", "Chocolate"],
    veg: true,
  },
  {
    id: "chocolate-shake",
    name: "Chocolate Shake (with Choco Chips)",
    description:
      "Classic thick chocolate shake topped with crunchy choco chips. Pure, simple, perfect.",
    price: 159,
    image: "/images/chocolate-shake.png",
    category: "shakes",
    tags: ["Classic", "Choco Chips"],
    veg: true,
  },

  // ===== SNACKS =====
  {
    id: "mr-burger",
    name: "Mr. Burger",
    description:
      "Juicy chicken patty, melted cheese & fresh veggies in a toasted sesame bun. The boss of burgers.",
    price: 129,
    image: "/images/mr-burger.png",
    category: "snacks",
    badge: "new",
    tags: ["Chicken", "Cheesy"],
    veg: false,
  },
  {
    id: "creamy-fries",
    name: "Chicken Creamy Fries",
    description:
      "Golden crispy fries smothered in creamy white sauce & seasoned chicken. Pure indulgence.",
    price: 119,
    image: "/images/creamy-fries.png",
    category: "snacks",
    tags: ["Loaded", "Creamy"],
    veg: false,
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    description:
      "Crispy fries dusted with fiery peri peri spice & served with a cool dip. Veg & punchy.",
    price: 99,
    image: "/images/peri-peri-fries.png",
    category: "snacks",
    tags: ["Spicy", "Veg"],
    veg: true,
  },

  // ===== MOCKTAILS =====
  {
    id: "bubblegum-mocktail",
    name: "Bubblegum Mocktail",
    description:
      "Playful pink-blue layered bubblegum cooler with whipped cream top. Sweet, fizzy & Insta-ready.",
    price: 109,
    image: "/images/bubblegum-mocktail.png",
    category: "mocktails",
    tags: ["Sweet", "Viral"],
    veg: true,
  },
  {
    id: "kiwi-mocktail",
    name: "Kiwi Mocktail",
    description:
      "Tangy-sweet green kiwi cooler with fresh kiwi slices & mint. Refreshing to the last drop.",
    price: 109,
    image: "/images/kiwi-mocktail.png",
    category: "mocktails",
    tags: ["Tangy", "Fresh"],
    veg: true,
  },
];

export const FEATURED_ITEMS = [
  {
    id: "feat-triple-choco",
    itemId: "triple-choco-waffle",
    title: "Triple Chocolate Waffle Sandwich",
    subtitle: "Best Seller",
    description:
      "Warm, sweet Belgian waffle sandwich heavily loaded with three types of rich chocolate. The reason we're famous.",
    image: "/images/triple-chocolate-waffle.png",
    accent: "gold" as const,
    stats: [
      { label: "Layers", value: "3" },
      { label: "Choco", value: "100%" },
      { label: "Love", value: "∞" },
    ],
  },
  {
    id: "feat-strawberry-jar",
    title: "The Viral Strawberry Brownie Jar",
    subtitle: "Limited-Edition / Viral Special",
    description:
      "Fresh strawberry layers combined with rich chocolate brownie bites. The jar that broke the internet.",
    image: "/images/strawberry-brownie-jar.png",
    accent: "strawberry" as const,
    stats: [
      { label: "Views", value: "1M+" },
      { label: "Layers", value: "5" },
      { label: "Limited", value: "Yes" },
    ],
  },
];

export const BRAND = {
  name: "SD Waffles & Shakes",
  tagline: "Where waffles get wild & shakes get thick!",
  shortTagline: "Wild waffles. Thick shakes.",
  location: "Miryalaguda, Telangana, India",
  primaryAddress:
    "Below Venky's Salon, Behind Bagara Hotel, Sagar Road, Miryalaguda, Nalgonda, Telangana - 508207",
  secondaryAddress:
    "Near Abhyas High School, Hotel Vaishnavi Road, Doctors Colony, Miryalaguda - 508207",
  phones: ["+91 7093258864", "+91 9989455263"],
  instagram: "https://www.instagram.com/sd_wafflesandshakes/",
  instagramHandle: "@sd_wafflesandshakes",
  altInstagramHandle: "@wafflesndshakes",
  hours: {
    open: "10:30 AM",
    close: "10:00 PM",
    days: "Open Daily · Mon – Sun",
  },
  services: ["Dine-in", "Takeaway"],
};
