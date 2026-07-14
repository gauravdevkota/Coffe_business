export type MenuCategory =
  | "coffee"
  | "cold-brew"
  | "tea"
  | "pastries"
  | "breakfast";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  tags?: string[];
  popular?: boolean;
  calories?: number;
}

export interface Category {
  id: MenuCategory;
  label: string;
  description: string;
  icon: string; // emoji-free, just an identifier we map to lucide icons in the UI
}

export const categories: Category[] = [
  {
    id: "coffee",
    label: "Coffee",
    description: "Espresso-based classics pulled from house-roasted beans",
    icon: "coffee",
  },
  {
    id: "cold-brew",
    label: "Cold Brew & Iced",
    description: "Slow-steeped cold brew and chilled espresso drinks",
    icon: "snowflake",
  },
  {
    id: "tea",
    label: "Tea & Infusions",
    description: "Loose-leaf teas and matcha, steeped to order",
    icon: "leaf",
  },
  {
    id: "pastries",
    label: "Pastries",
    description: "Baked fresh every morning in our pastry kitchen",
    icon: "croissant",
  },
  {
    id: "breakfast",
    label: "Breakfast",
    description: "All-day brunch plates built to pair with your cup",
    icon: "egg",
  },
];

export const menuItems: MenuItem[] = [
  // ---------- Coffee ----------
  {
    id: "espresso",
    name: "Single Origin Espresso",
    description:
      "A double shot of our seasonal house blend, pulled tight with a golden crema. Notes of dark chocolate and toasted almond.",
    price: 3.25,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
    tags: ["Strong", "Single Origin"],
    popular: true,
    calories: 5,
  },
  {
    id: "americano",
    name: "Americano",
    description:
      "Two shots of espresso lengthened with hot water for a clean, full-bodied cup with a long finish.",
    price: 3.75,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=80",
    tags: ["Bold"],
    calories: 10,
  },
  {
    id: "latte",
    name: "Café Latte",
    description:
      "Velvety steamed milk over a double shot of espresso, finished with delicate latte art.",
    price: 4.5,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=80",
    tags: ["Creamy"],
    popular: true,
    calories: 190,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Equal parts espresso, steamed milk, and dense microfoam. A classic, balanced ratio.",
    price: 4.25,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    tags: ["Foamy", "Classic"],
    calories: 120,
  },
  {
    id: "flat-white",
    name: "Flat White",
    description:
      "Ristretto shots folded into thin, glossy microfoam for an intensely coffee-forward cup.",
    price: 4.5,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1606859191213-92b5f12f56ca?auto=format&fit=crop&w=800&q=80",
    tags: ["Strong", "Smooth"],
    calories: 130,
  },
  {
    id: "mocha",
    name: "Dark Mocha",
    description:
      "Double espresso, house-made 70% dark chocolate, and steamed milk, topped with cocoa dusting.",
    price: 4.95,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1578314675229-2c92f6dcaf64?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Chocolate"],
    popular: true,
    calories: 260,
  },
  {
    id: "macchiato",
    name: "Caramel Macchiato",
    description:
      "Vanilla-steamed milk marked with espresso and finished with a slow drizzle of salted caramel.",
    price: 5.25,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f898105d424?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Caramel"],
    calories: 240,
  },

  // ---------- Cold Brew & Iced ----------
  {
    id: "cold-brew",
    name: "House Cold Brew",
    description:
      "Steeped 18 hours for a smooth, low-acid concentrate served over a single large ice cube.",
    price: 4.75,
    category: "cold-brew",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    tags: ["Smooth", "18h Steep"],
    popular: true,
    calories: 15,
  },
  {
    id: "iced-latte",
    name: "Iced Vanilla Latte",
    description:
      "Double espresso shaken with vanilla syrup and chilled milk, poured over ice.",
    price: 4.95,
    category: "cold-brew",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    tags: ["Vanilla", "Refreshing"],
    calories: 180,
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    description:
      "Espresso, dark chocolate, and cold milk over ice, finished with whipped cream.",
    price: 5.25,
    category: "cold-brew",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80",
    tags: ["Chocolate", "Cold"],
    calories: 280,
  },
  {
    id: "frappe",
    name: "Caramel Frappé",
    description:
      "Blended espresso, milk, and ice with caramel, topped with whipped cream and a caramel drizzle.",
    price: 5.75,
    category: "cold-brew",
    image:
      "https://images.unsplash.com/photo-1572286258217-215cf8e16567?auto=format&fit=crop&w=800&q=80",
    tags: ["Blended", "Sweet"],
    popular: true,
    calories: 360,
  },
  {
    id: "nitro",
    name: "Nitro Cold Brew",
    description:
      "Cold brew infused with nitrogen for a cascading, stout-like body and a naturally sweet finish.",
    price: 5.5,
    category: "cold-brew",
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=800&q=80",
    tags: ["Nitrogen", "Creamy"],
    calories: 20,
  },

  // ---------- Tea & Infusions ----------
  {
    id: "matcha-latte",
    name: "Ceremonial Matcha Latte",
    description:
      "Stone-ground ceremonial matcha whisked with lightly sweetened steamed milk.",
    price: 5.25,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    tags: ["Matcha", "Earthy"],
    popular: true,
    calories: 160,
  },
  {
    id: "chai-latte",
    name: "Spiced Chai Latte",
    description:
      "House-brewed black tea steeped with cardamom, cinnamon, ginger, and clove, folded into steamed milk.",
    price: 4.75,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
    tags: ["Spiced", "Warming"],
    calories: 200,
  },
  {
    id: "earl-grey",
    name: "Earl Grey",
    description:
      "Classic bergamot-scented black tea, steeped three minutes and served with a side of honey.",
    price: 3.5,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800&q=80",
    tags: ["Bergamot"],
    calories: 5,
  },
  {
    id: "herbal-tea",
    name: "Chamomile & Lavender",
    description:
      "Caffeine-free infusion of Egyptian chamomile and French lavender. A calm in a cup.",
    price: 3.75,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=800&q=80",
    tags: ["Caffeine-Free", "Calming"],
    calories: 5,
  },

  // ---------- Pastries ----------
  {
    id: "croissant",
    name: "Butter Croissant",
    description:
      "Laminated 27 layers and baked in-house each morning for a shatteringly crisp, honeycombed crumb.",
    price: 3.95,
    category: "pastries",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tags: ["Flaky", "Buttery"],
    popular: true,
    calories: 270,
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description:
      "The same croissant dough wrapped around two batons of 64% single-origin dark chocolate.",
    price: 4.25,
    category: "pastries",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
    tags: ["Chocolate"],
    calories: 320,
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description:
      "Soft brioche swirled with brown sugar and Saigon cinnamon, finished with cream cheese glaze.",
    price: 4.75,
    category: "pastries",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c1e3e28?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Warming"],
    popular: true,
    calories: 410,
  },
  {
    id: "blueberry-muffin",
    name: "Wild Blueberry Muffin",
    description:
      "Tender muffin studded with wild Maine blueberries and a crunchy turbinado top.",
    price: 3.5,
    category: "pastries",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80",
    tags: ["Fruity"],
    calories: 290,
  },
  {
    id: "bagel",
    name: "Sesame Bagel & Cream Cheese",
    description:
      "Boiled-then-baked sesame bagel with a generous schmear of whipped chive cream cheese.",
    price: 4.5,
    category: "pastries",
    image:
      "https://images.unsplash.com/photo-1592151450480-2e9c4b9b9b3c?auto=format&fit=crop&w=800&q=80",
    tags: ["Savory"],
    calories: 340,
  },

  // ---------- Breakfast ----------
  {
    id: "avocado-toast",
    name: "Smashed Avocado Toast",
    description:
      "Sourdough toast, smashed avocado, chili crisp, soft poached egg, and a squeeze of lemon.",
    price: 8.95,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Savory"],
    popular: true,
    calories: 420,
  },
  {
    id: "egg-sandwich",
    name: "Egg & Cheddar Sandwich",
    description:
      "Brioche bun, fried egg with runny yolk, aged cheddar, and house pickled jalapeño.",
    price: 7.5,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    tags: ["Savory"],
    calories: 480,
  },
  {
    id: "pancakes",
    name: "Buttermilk Pancakes",
    description:
      "Three fluffy buttermilk pancakes with whipped butter and warm maple syrup.",
    price: 8.25,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Stack"],
    popular: true,
    calories: 560,
  },
  {
    id: "granola-bowl",
    name: "Yogurt & Granola Bowl",
    description:
      "House granola, Greek yogurt, seasonal fruit, and a drizzle of wildflower honey.",
    price: 7.25,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthy", "Fruity"],
    calories: 380,
  },
];
