export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  emoji: string;
  category: string;
  tags?: string[];
  badge?: "bestseller" | "viral" | "new" | "chef";
  veg?: boolean;
  variants?: string;
}

export interface MenuCategoryDef {
  id: string;
  label: string;
  short: string;
  emoji: string;
  blurb: string;
  accent: "gold" | "strawberry" | "choco" | "cream";
}

// Category representative images — used as fallback for items without a specific photo
export const CATEGORY_IMAGES: Record<string, string> = {
  "waffle-sandwich": "/images/cat-waffles.png",
  "premium-shakes": "/images/cat-premium-shakes.png",
  "choco-shakes": "/images/cat-choco-shakes.png",
  "fruit-shakes": "/images/cat-fruit-shakes.png",
  "mocktails": "/images/cat-mocktails.png",
  "waffle-sundae": "/images/cat-sundae.png",
  "brownies": "/images/cat-brownies.png",
  "ice-creams": "/images/cat-icecream.png",
  "snacks": "/images/cat-snacks.png",
  "burgers": "/images/cat-burgers.png",
  "momos": "/images/cat-momos.png",
  "mini-pancakes": "/images/cat-pancakes.png",
  "hot-beverages": "/images/cat-hot-beverages.png",
  "waffle-icecream": "/images/cat-waffle-icecream.png",
  "sizzling-brownie": "/images/cat-sizzling.png",
  "toppings": "/images/cat-toppings.png",
};

// Resolve the best image for a menu item: specific photo, else category representative
export function getItemImage(item: MenuItem): string {
  return item.image || CATEGORY_IMAGES[item.category] || "/images/cat-waffles.png";
}

export const CATEGORIES: MenuCategoryDef[] = [
  {
    id: "waffle-sandwich",
    label: "Waffle Sandwiches",
    short: "Waffles",
    emoji: "🧇",
    blurb: "Golden, crispy & dangerously loaded",
    accent: "gold",
  },
  {
    id: "premium-shakes",
    label: "Premium Thick Shakes",
    short: "Premium Shakes",
    emoji: "🥤",
    blurb: "Thick enough to hold your spoon upright",
    accent: "choco",
  },
  {
    id: "choco-shakes",
    label: "Choco Thick Shakes",
    short: "Choco Shakes",
    emoji: "🍫",
    blurb: "Chocolate in every form, shaken thick",
    accent: "choco",
  },
  {
    id: "fruit-shakes",
    label: "Fruit Shakes",
    short: "Fruit Shakes",
    emoji: "🍓",
    blurb: "Real fruit, real refreshment",
    accent: "strawberry",
  },
  {
    id: "mocktails",
    label: "Mocktails",
    short: "Mocktails",
    emoji: "🍹",
    blurb: "Cool, colourful & crazy refreshing",
    accent: "strawberry",
  },
  {
    id: "waffle-sundae",
    label: "Waffle Sundae",
    short: "Waffle Sundae",
    emoji: "🍨",
    blurb: "Waffles + sundae = pure joy",
    accent: "gold",
  },
  {
    id: "brownies",
    label: "Brownies & Sizzlers",
    short: "Brownies",
    emoji: "🟫",
    blurb: "Warm, fudgy & sizzling hot",
    accent: "choco",
  },
  {
    id: "ice-creams",
    label: "Ice Creams",
    short: "Ice Creams",
    emoji: "🍦",
    blurb: "Scoops of happiness",
    accent: "strawberry",
  },
  {
    id: "snacks",
    label: "Snacks",
    short: "Snacks",
    emoji: "🍟",
    blurb: "Crispy, salty & seriously addictive",
    accent: "gold",
  },
  {
    id: "burgers",
    label: "Burgers",
    short: "Burgers",
    emoji: "🍔",
    blurb: "Stacked, juicy & seriously satisfying",
    accent: "choco",
  },
  {
    id: "momos",
    label: "Momos",
    short: "Momos",
    emoji: "🥟",
    blurb: "Steamy parcels of flavour",
    accent: "cream",
  },
  {
    id: "mini-pancakes",
    label: "Mini Pan Cakes",
    short: "Pan Cakes",
    emoji: "🥞",
    blurb: "Fluffy stacks of golden goodness",
    accent: "gold",
  },
  {
    id: "hot-beverages",
    label: "Hot Beverages",
    short: "Hot Drinks",
    emoji: "☕",
    blurb: "Warm up the sweet way",
    accent: "choco",
  },
  {
    id: "waffle-icecream",
    label: "Waffle Icecream Sandwich",
    short: "Waffle Icecream",
    emoji: "🧊",
    blurb: "Waffles hugged around cold ice cream",
    accent: "strawberry",
  },
  {
    id: "sizzling-brownie",
    label: "Sizzling Brownie",
    short: "Sizzling",
    emoji: "🔥",
    blurb: "Brownie meets hot sizzler plate",
    accent: "choco",
  },
  {
    id: "toppings",
    label: "Extra Toppings",
    short: "Toppings",
    emoji: "✨",
    blurb: "Load it up, make it yours",
    accent: "gold",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ===== WAFFLE SANDWICHES =====
  { id: "ws-triple-choco", name: "Triple Chocolate", price: 120, image: "/images/triple-chocolate-waffle.png", emoji: "🧇", category: "waffle-sandwich", badge: "bestseller", veg: true, tags: ["Best Seller"], description: "Three types of rich chocolate, heavily loaded." },
  { id: "ws-double-choco", name: "Double Chocolate", price: 110, image: "/images/double-chocolate-waffle.png", emoji: "🧇", category: "waffle-sandwich", veg: true, description: "Double the cocoa, double the obsession." },
  { id: "ws-nutella", name: "Nutella", price: 100, image: "/images/nutella-waffle.png", emoji: "🧇", category: "waffle-sandwich", veg: true, tags: ["Hazelnut"], description: "Creamy hazelnut Nutella, thick & dreamy." },
  { id: "ws-kitkat", name: "Kit Kat", price: 120, image: "/images/kitkat-waffle.png", emoji: "🧇", category: "waffle-sandwich", veg: true, tags: ["Crunchy"], description: "Crunchy Kit Kat bars melted in. Have a break." },
  { id: "ws-cookies-cream", name: "Cookies & Cream", price: 110, emoji: "🍪", category: "waffle-sandwich", veg: true, description: "Crushed cookies folded into cream." },
  { id: "ws-choconuts", name: "Choconuts", price: 110, emoji: "🥜", category: "waffle-sandwich", veg: true, description: "Chocolate + nuts, the classic combo." },
  { id: "ws-berry-berry", name: "Berry Berry", price: 80, emoji: "🫐", category: "waffle-sandwich", veg: true, description: "Loaded with mixed berries." },
  { id: "ws-strawberry", name: "Strawberry", price: 90, emoji: "🍓", category: "waffle-sandwich", veg: true, description: "Fresh strawberry layers." },
  { id: "ws-dark-chocolate", name: "Dark Chocolate", price: 100, emoji: "🌑", category: "waffle-sandwich", veg: true, description: "Bold, intense dark chocolate." },

  // ===== PREMIUM THICK SHAKES =====
  { id: "ps-ferror-brownie", name: "Ferror Brownie", price: 170, image: "/images/ferrero-shake.png", emoji: "🥤", category: "premium-shakes", badge: "chef", veg: true, tags: ["Chef's Pick", "Hazelnut"], description: "Real Ferrero Rocher blended with brownie." },
  { id: "ps-brownie-oreo", name: "Brownie Oreo", price: 160, image: "/images/brownie-oreo-shake.png", emoji: "🥤", category: "premium-shakes", veg: true, tags: ["Thick"], description: "Brownie bits + Oreo crumble in thick shake." },
  { id: "ps-double-choco-kitkat", name: "Double Chocolate Kitkat", price: 160, image: "/images/double-chocolate-kitkat-shake.png", emoji: "🥤", category: "premium-shakes", veg: true, description: "Double chocolate + crunchy Kit Kat." },
  { id: "ps-brownie-chocolate", name: "Brownie Chocolate", price: 160, emoji: "🥤", category: "premium-shakes", veg: true, description: "Fudgy brownie meets rich chocolate." },
  { id: "ps-peanut-oreo", name: "Peanut Oreo", price: 160, emoji: "🥜", category: "premium-shakes", veg: true, description: "Peanut butter + Oreo, a nutty crush." },
  { id: "ps-snicker-oreo", name: "Snicker Oreo", price: 160, emoji: "🍫", category: "premium-shakes", veg: true, description: "Snicker + Oreo, caramel-cocoa overload." },
  { id: "ps-nutella-hazelnut", name: "Nutella Hazelnut", price: 160, emoji: "🥜", category: "premium-shakes", veg: true, tags: ["Hazelnut"], description: "Double hazelnut, double dream." },
  { id: "ps-nutella-brownie", name: "Nutella Brownie", price: 150, image: "/images/nutella-brownie-shake.png", emoji: "🥤", category: "premium-shakes", veg: true, tags: ["Thick"], description: "Nutella + brownie chunks. Spoon-mandatory." },
  { id: "ps-nutella-oreo", name: "Nutella Oreo", price: 140, image: "/images/nutella-oreo-shake.png", emoji: "🥤", category: "premium-shakes", veg: true, description: "Nutella blended with Oreo cookies." },
  { id: "ps-black-current-oreo", name: "Black Current Oreo", price: 140, emoji: "🫐", category: "premium-shakes", veg: true, description: "Berry-blackcurrent + Oreo crunch." },
  { id: "ps-strawberry-oreo", name: "Strawberry Oreo", price: 140, emoji: "🍓", category: "premium-shakes", veg: true, description: "Strawberry + Oreo, pink & creamy." },
  { id: "ps-oreo-kitty", name: "Oreo Kitty", price: 140, emoji: "🍪", category: "premium-shakes", veg: true, description: "Cookies & cream kitty style." },
  { id: "ps-snicker-superior", name: "Snicker Superior", price: 150, emoji: "🍫", category: "premium-shakes", veg: true, description: "Caramel, peanut, nougat — superior indeed." },
  { id: "ps-almond-rose", name: "Almond Rose", price: 150, emoji: "🌹", category: "premium-shakes", veg: true, description: "Almond & rose, floral and nutty." },

  // ===== CHOCO THICK SHAKES =====
  { id: "cs-cold-coffee", name: "Cold Coffee", price: 110, image: "/images/chocolate-shake.png", emoji: "☕", category: "choco-shakes", veg: true, description: "Classic chilled coffee shake." },
  { id: "cs-butterscotch", name: "Butterscotch", price: 110, image: "/images/butterscotch-shake.png", emoji: "🧈", category: "choco-shakes", veg: true, description: "Golden butterscotch with caramel drizzle." },
  { id: "cs-perk-feast", name: "Perk Feast", price: 110, image: "/images/perk-feast-shake.png", emoji: "🍫", category: "choco-shakes", veg: true, description: "Perk chocolate pieces in every sip." },
  { id: "cs-munch-crunchy", name: "Munch Crunchy", price: 110, emoji: "🍫", category: "choco-shakes", veg: true, description: "Crunchy Munch chocolate loaded." },
  { id: "cs-vanilla-brownie", name: "Vanilla Brownie", price: 120, emoji: "🍦", category: "choco-shakes", veg: true, description: "Vanilla + brownie, simple bliss." },
  { id: "cs-belgium-chocolate", name: "Belgium Chocolate", price: 120, emoji: "🍫", category: "choco-shakes", veg: true, tags: ["Belgian"], description: "Rich Belgian chocolate shake." },
  { id: "cs-nutella", name: "Nutella", price: 130, emoji: "🥜", category: "choco-shakes", veg: true, tags: ["Hazelnut"], description: "Pure Nutella, thick & creamy." },
  { id: "cs-kitkat", name: "Kit Kat", price: 130, emoji: "🍫", category: "choco-shakes", veg: true, description: "Kit Kat pieces, crunch & cocoa." },
  { id: "cs-5star", name: "5 Star", price: 130, image: "/images/5star-shake.png", emoji: "⭐", category: "choco-shakes", veg: true, description: "Caramel-chocolate 5 Star chunks." },
  { id: "cs-choco-chips", name: "Choco Chips", price: 130, image: "/images/chocolate-shake.png", emoji: "🍫", category: "choco-shakes", veg: true, description: "Chocolate shake with crunchy choco chips." },
  { id: "cs-bourboun", name: "Bourbon", price: 130, emoji: "🍪", category: "choco-shakes", veg: true, description: "Bourbon biscuit chocolate shake." },
  { id: "cs-blue-moon", name: "Blue Moon", price: 130, emoji: "💙", category: "choco-shakes", veg: true, description: "Misty blue, sweet & dreamy." },

  // ===== FRUIT SHAKES =====
  { id: "fs-strawberry", name: "Strawberry", price: 100, emoji: "🍓", category: "fruit-shakes", veg: true, description: "Fresh strawberry fruit shake." },
  { id: "fs-blueberry", name: "Blueberry", price: 100, emoji: "🫐", category: "fruit-shakes", veg: true, description: "Bursting blueberry goodness." },
  { id: "fs-mango", name: "Mango", price: 100, emoji: "🥭", category: "fruit-shakes", veg: true, tags: ["Seasonal"], description: "King of fruits, thick & sweet." },
  { id: "fs-litchi", name: "Litchi", price: 100, emoji: "🍐", category: "fruit-shakes", veg: true, description: "Juicy litchi fruit shake." },
  { id: "fs-kiwi", name: "Kiwi", price: 100, image: "/images/kiwi-mocktail.png", emoji: "🥝", category: "fruit-shakes", veg: true, description: "Tangy-sweet kiwi cooler." },
  { id: "fs-black-current", name: "Black Current", price: 100, emoji: "🫐", category: "fruit-shakes", veg: true, description: "Deep berry blackcurrent shake." },
  { id: "fs-water-melon", name: "Water Melon", price: 100, emoji: "🍉", category: "fruit-shakes", veg: true, description: "Cool, hydrating watermelon." },
  { id: "fs-green-apple", name: "Green Apple", price: 100, emoji: "🍏", category: "fruit-shakes", veg: true, description: "Crisp, tart green apple." },
  { id: "fs-guvva", name: "Guvva", price: 100, emoji: "🍐", category: "fruit-shakes", veg: true, description: "Tropical guava shake." },

  // ===== MOCKTAILS =====
  { id: "mk-strawberry", name: "Strawberry", price: 100, emoji: "🍓", category: "mocktails", veg: true, description: "Sweet strawberry mocktail." },
  { id: "mk-blue-curacao", name: "Blue Curacao", price: 100, emoji: "💙", category: "mocktails", veg: true, description: "Electric blue citrus cooler." },
  { id: "mk-berry-blast", name: "Berry Blast", price: 100, emoji: "🫐", category: "mocktails", veg: true, description: "Mixed berry explosion." },
  { id: "mk-bubble-gum", name: "Bubble Gum", price: 100, image: "/images/bubblegum-mocktail.png", emoji: "🫧", category: "mocktails", veg: true, tags: ["Viral"], description: "Pink-blue bubblegum fizz, Insta-ready." },
  { id: "mk-green-apple", name: "Green Apple", price: 100, emoji: "🍏", category: "mocktails", veg: true, description: "Crisp green apple cooler." },
  { id: "mk-virgin-mojito", name: "Virgin Mojito", price: 100, emoji: "🍃", category: "mocktails", veg: true, description: "Mint-lime refreshing classic." },
  { id: "mk-black-current", name: "Black Current", price: 100, emoji: "🫐", category: "mocktails", veg: true, description: "Berry blackcurrent mocktail." },
  { id: "mk-water-melon", name: "Water Melon", price: 100, emoji: "🍉", category: "mocktails", veg: true, description: "Cool watermelon refresher." },
  { id: "mk-kiwi", name: "Kiwi", price: 100, image: "/images/kiwi-mocktail.png", emoji: "🥝", category: "mocktails", veg: true, description: "Tangy kiwi mocktail." },

  // ===== WAFFLE SUNDAE =====
  { id: "wsu-sugar-rush", name: "Sugar Rush", price: 150, emoji: "🍬", category: "waffle-sundae", veg: true, description: "The ultimate sugar overload sundae." },
  { id: "wsu-strawberry", name: "Strawberry", price: 150, emoji: "🍓", category: "waffle-sundae", veg: true, description: "Strawberry loaded waffle sundae." },
  { id: "wsu-berry-good", name: "Berry Good", price: 150, emoji: "🫐", category: "waffle-sundae", veg: true, description: "Mixed berries, so berry good." },
  { id: "wsu-dark-chocolate", name: "Dark Chocolate", price: 150, emoji: "🍫", category: "waffle-sundae", veg: true, description: "Bold dark chocolate sundae." },
  { id: "wsu-belgium", name: "Belgium", price: 150, emoji: "🍫", category: "waffle-sundae", veg: true, tags: ["Belgian"], description: "Belgian chocolate indulgence." },
  { id: "wsu-rocky-over-loaded", name: "Rocky Over Loaded", price: 180, emoji: "🏔️", category: "waffle-sundae", badge: "new", veg: true, tags: ["Loaded"], description: "Overloaded rocky mountain of toppings." },
  { id: "wsu-mm", name: "M&M", price: 150, emoji: "🍬", category: "waffle-sundae", veg: true, description: "Colourful M&M chocolate sundae." },
  { id: "wsu-double-choco", name: "Double Choco", price: 150, emoji: "🍫", category: "waffle-sundae", veg: true, description: "Double chocolate, double joy." },
  { id: "wsu-nutella", name: "Nutella", price: 150, emoji: "🥜", category: "waffle-sundae", veg: true, description: "Nutella-drenched waffle sundae." },
  { id: "wsu-ferrero-rocher", name: "Ferrero Rocher Waffle", price: 180, emoji: "🟤", category: "waffle-sundae", badge: "chef", veg: true, tags: ["Chef's Pick"], description: "Ferrero Rocher crowned waffle sundae." },
  { id: "wsu-brownie", name: "Brownie Waffle", price: 180, emoji: "🟫", category: "waffle-sundae", veg: true, description: "Warm brownie + waffle + sundae." },
  { id: "wsu-kitty-vanilla", name: "Kitty Vanilla Waffle", price: 150, emoji: "🐱", category: "waffle-sundae", veg: true, description: "Cute kitty vanilla waffle sundae." },

  // ===== BROWNIES & SIZZLERS =====
  { id: "br-chocolate-brownie", name: "Chocolate Brownie", price: 110, emoji: "🟫", category: "brownies", veg: true, description: "Warm fudgy chocolate brownie." },
  { id: "br-brownie-icecream", name: "Brownie + Icecream", price: 130, image: "/images/strawberry-brownie-jar.png", emoji: "🍨", category: "brownies", veg: true, tags: ["Best Seller"], description: "Brownie crowned with cold ice cream." },
  { id: "br-red-velvet-brownie", name: "Red Velvet Brownie", price: 130, emoji: "🟥", category: "brownies", veg: true, description: "Velvety red brownie bites." },
  { id: "br-red-velvet-icecream", name: "Red Velvet + Icecream", price: 150, emoji: "🍨", category: "brownies", veg: true, description: "Red velvet brownie + ice cream." },
  { id: "br-chocolate-sizzler", name: "Chocolate Sizzler", price: 180, emoji: "🔥", category: "brownies", badge: "viral", veg: true, tags: ["Sizzling"], description: "Hot sizzling chocolate brownie + ice cream." },
  { id: "br-red-velvet-sizzler", name: "Red Velvet Sizzler", price: 190, emoji: "🔥", category: "brownies", veg: true, tags: ["Sizzling"], description: "Red velvet sizzler with ice cream." },

  // ===== ICE CREAMS =====
  { id: "ic-vanilla", name: "Vanilla", price: 80, emoji: "🍦", category: "ice-creams", veg: true, description: "Classic creamy vanilla." },
  { id: "ic-strawberry", name: "Strawberry", price: 80, emoji: "🍓", category: "ice-creams", veg: true, description: "Fresh strawberry ice cream." },
  { id: "ic-butterscotch", name: "Butterscotch", price: 80, emoji: "🧈", category: "ice-creams", veg: true, description: "Golden butterscotch crunch." },
  { id: "ic-black-current", name: "Black Current", price: 80, emoji: "🫐", category: "ice-creams", veg: true, description: "Berry-rich blackcurrent." },
  { id: "ic-chocolate", name: "Chocolate", price: 80, emoji: "🍫", category: "ice-creams", veg: true, description: "Rich chocolate ice cream." },
  { id: "ic-caramel-nuts", name: "Caramel Nuts", price: 90, emoji: "🥜", category: "ice-creams", veg: true, description: "Caramel loaded with nuts." },
  { id: "ic-cookies-creamy", name: "Cookies & Creamy", price: 90, emoji: "🍪", category: "ice-creams", veg: true, description: "Cookies folded in cream." },
  { id: "ic-dry-fruit-special", name: "Dry Fruit Special", price: 100, emoji: "🥜", category: "ice-creams", veg: true, tags: ["Premium"], description: "Loaded with premium dry fruits." },
  { id: "ic-choco-over", name: "Choco Over", price: 100, emoji: "🍫", category: "ice-creams", veg: true, description: "Chocolate overload scoop." },
  { id: "ic-load-choco-chips", name: "Load Choco Chips", price: 90, emoji: "🍫", category: "ice-creams", veg: true, description: "Loaded with crunchy choco chips." },

  // ===== SNACKS =====
  { id: "sn-salted-fries", name: "Salted Fries", price: 90, emoji: "🍟", category: "snacks", veg: true, description: "Classic golden salted fries." },
  { id: "sn-peri-peri-fries", name: "Peri Peri Fries", price: 100, image: "/images/peri-peri-fries.png", emoji: "🍟", category: "snacks", veg: true, tags: ["Spicy"], description: "Fiery peri peri dusted crispy fries." },
  { id: "sn-cheesy-fries", name: "Cheesy Fries", price: 120, image: "/images/creamy-fries.png", emoji: "🧀", category: "snacks", veg: true, tags: ["Cheesy"], description: "Fries smothered in molten cheese." },
  { id: "sn-chicken-popcorn", name: "Chicken Popcorn", price: 110, emoji: "🍗", category: "snacks", veg: false, variants: "10pc / 15pc", description: "Bite-sized crispy chicken popcorn." },
  { id: "sn-chicken-nuggets", name: "Chicken Nuggets", price: 110, emoji: "🍗", category: "snacks", veg: false, variants: "5pc / 8pc", description: "Crispy chicken nuggets." },
  { id: "sn-pizza-pockets", name: "Pizza Pockets", price: 120, emoji: "🥟", category: "snacks", veg: true, description: "Cheesy pizza-stuffed pockets." },
  { id: "sn-jalapeno-poppers", name: "Jalapeno Poppers", price: 120, emoji: "🌶️", category: "snacks", veg: true, tags: ["Spicy"], description: "Cheese-stuffed jalapeno poppers." },
  { id: "sn-cheesy-corn", name: "Cheesy Corn", price: 120, emoji: "🌽", category: "snacks", veg: true, description: "Sweet corn in creamy cheese." },
  { id: "sn-chicken-wings", name: "Chicken Wings", price: 120, emoji: "🍗", category: "snacks", veg: false, description: "Smoky spiced chicken wings." },
  { id: "sn-chicken-strips", name: "Chicken Strips", price: 120, emoji: "🍗", category: "snacks", veg: false, description: "Crispy breaded chicken strips." },

  // ===== BURGERS =====
  { id: "bg-veg-burger", name: "Veg Burger", price: 110, emoji: "🍔", category: "burgers", veg: true, description: "Crispy veg patty burger." },
  { id: "bg-veg-hungrybird", name: "Veg Hungrybird", price: 130, emoji: "🍔", category: "burgers", veg: true, description: "Loaded double veg burger." },
  { id: "bg-double-cheese", name: "Double Cheese Burger", price: 150, emoji: "🧀", category: "burgers", veg: true, tags: ["Cheesy"], description: "Double patty, double cheese." },
  { id: "bg-chicken-burger", name: "Chicken Burger", price: 120, image: "/images/mr-burger.png", emoji: "🍔", category: "burgers", veg: false, description: "Juicy chicken patty, toasted bun." },
  { id: "bg-chicken-hungrybird", name: "Chicken Hungrybird", price: 160, emoji: "🍔", category: "burgers", veg: false, description: "Big loaded double chicken burger." },
  { id: "bg-chicken-cheese", name: "Chicken Cheese Burger", price: 180, emoji: "🧀", category: "burgers", veg: false, tags: ["Cheesy"], description: "Chicken patty drowned in cheese." },
  { id: "bg-paneer-burger", name: "Paneer Burger", price: 150, emoji: "🧀", category: "burgers", veg: true, description: "Spiced paneer patty burger." },

  // ===== MOMOS =====
  { id: "mm-veg", name: "Veg Momos", price: 100, emoji: "🥟", category: "momos", veg: true, variants: "4pc", description: "Steamy veg-stuffed momos." },
  { id: "mm-paneer", name: "Paneer Momos", price: 110, emoji: "🥟", category: "momos", veg: true, variants: "4pc", description: "Soft paneer stuffed momos." },
  { id: "mm-chicken", name: "Chicken Momos", price: 100, emoji: "🥟", category: "momos", veg: false, variants: "4pc", description: "Juicy chicken momos, 4 pieces." },

  // ===== MINI PAN CAKES =====
  { id: "mp-classic", name: "Classic", price: 120, emoji: "🥞", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Fluffy classic mini pan cakes." },
  { id: "mp-berry-berry", name: "Berry Berry", price: 120, emoji: "🫐", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Berry-loaded mini stacks." },
  { id: "mp-strawberry", name: "Strawberry", price: 120, emoji: "🍓", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Strawberry-topped mini cakes." },
  { id: "mp-white-chocolate", name: "White Chocolate", price: 120, emoji: "🤍", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "White chocolate drizzle stacks." },
  { id: "mp-cookies-cream", name: "Cookies & Cream", price: 120, emoji: "🍪", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Cookies & cream mini cakes." },
  { id: "mp-choco-crunch", name: "Choco Crunch", price: 120, emoji: "🍫", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Crunchy chocolate mini stacks." },
  { id: "mp-double-chocolate", name: "Double Chocolate", price: 120, emoji: "🍫", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Double chocolate mini pan cakes." },
  { id: "mp-triple-chocolate", name: "Triple Chocolate", price: 120, emoji: "🍫", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Triple chocolate indulgence." },
  { id: "mp-belgium", name: "Belgium", price: 120, emoji: "🍫", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Belgian chocolate mini cakes." },
  { id: "mp-nutella", name: "Nutella", price: 120, emoji: "🥜", category: "mini-pancakes", veg: true, variants: "7 pcs / 10 pcs", description: "Nutella-loaded mini stacks." },

  // ===== HOT BEVERAGES =====
  { id: "hb-classic-hot-chocolate", name: "Classic Hot Chocolate", price: 200, emoji: "☕", category: "hot-beverages", veg: true, tags: ["Premium"], description: "Rich classic hot chocolate." },
  { id: "hb-hot-chocolate-dark", name: "Hot Chocolate Dark", price: 240, emoji: "☕", category: "hot-beverages", veg: true, tags: ["Premium"], description: "Intense dark hot chocolate." },
  { id: "hb-hot-pineapple-zest", name: "Hot Pineapple Zest", price: 120, emoji: "🍍", category: "hot-beverages", veg: true, description: "Warm pineapple zesty drink." },
  { id: "hb-lemon-tea", name: "Lemon Tea", price: 80, emoji: "🍋", category: "hot-beverages", veg: true, description: "Soothing lemon tea." },

  // ===== WAFFLE ICECREAM SANDWICH =====
  { id: "wis-vanilla", name: "Vanilla", price: 120, emoji: "🍦", category: "waffle-icecream", veg: true, description: "Waffle sandwich with vanilla ice cream." },
  { id: "wis-butterscotch", name: "Butterscotch", price: 120, emoji: "🧈", category: "waffle-icecream", veg: true, description: "Waffle + butterscotch ice cream." },
  { id: "wis-strawberry", name: "Strawberry", price: 120, emoji: "🍓", category: "waffle-icecream", veg: true, description: "Waffle + strawberry ice cream." },

  // ===== SIZZLING BROWNIE (standalone) =====
  { id: "sb-chocolate-brownie", name: "Chocolate Brownie", price: 150, emoji: "🔥", category: "sizzling-brownie", veg: true, description: "Sizzling chocolate brownie with ice cream." },
  { id: "sb-red-velvet-brownie", name: "Red Velvet Brownie", price: 160, emoji: "🔥", category: "sizzling-brownie", veg: true, description: "Sizzling red velvet brownie with ice cream." },

  // ===== EXTRA TOPPINGS =====
  { id: "tp-oreo", name: "Oreo", price: 40, emoji: "🍪", category: "toppings", veg: true, description: "Crushed Oreo topping." },
  { id: "tp-vanilla", name: "Vanilla", price: 40, emoji: "🍦", category: "toppings", veg: true, description: "Vanilla scoop topping." },
  { id: "tp-butter-scotch", name: "Butter Scotch", price: 40, emoji: "🧈", category: "toppings", veg: true, description: "Butterscotch crumble topping." },
  { id: "tp-kitkat", name: "Kit-Kat", price: 40, emoji: "🍫", category: "toppings", veg: true, description: "Kit Kat crush topping." },
  { id: "tp-tutty-fruity", name: "Tutty Fruity", price: 40, emoji: "🍬", category: "toppings", veg: true, description: "Colourful tutty fruity." },
  { id: "tp-choco-chips", name: "Choco Chips", price: 40, emoji: "🍫", category: "toppings", veg: true, description: "Crunchy choco chips." },
  { id: "tp-brownie", name: "Brownie", price: 50, emoji: "🟫", category: "toppings", veg: true, description: "Brownie chunk topping." },
  { id: "tp-chocolate", name: "Chocolate", price: 40, emoji: "🍫", category: "toppings", veg: true, description: "Chocolate sauce topping." },
  { id: "tp-ferrero-rocher", name: "Ferrero Rocher", price: 60, emoji: "🟤", category: "toppings", veg: true, tags: ["Premium"], description: "Ferrero Rocher crush." },
  { id: "tp-chocolate-fountain", name: "Chocolate Fountain", price: 60, emoji: "⛲", category: "toppings", veg: true, description: "Flowing chocolate fountain pour." },
  { id: "tp-choco-cake", name: "Choco Cake", price: 50, emoji: "🍰", category: "toppings", veg: true, description: "Choco cake piece topping." },
  { id: "tp-marshmallow", name: "Marshmellow", price: 40, emoji: "⚪", category: "toppings", veg: true, description: "Soft marshmallow topping." },
];

export const FEATURED_ITEMS = [
  {
    id: "feat-triple-choco",
    itemId: "ws-triple-choco",
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
  logo: "/images/logo-sd.png",
  logoCream: "/images/logo-sd-cream.png",
};
