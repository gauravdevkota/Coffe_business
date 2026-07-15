export type MenuCategory =
  | "chiya"
  | "coffee"
  | "cold-drinks"
  | "savory"
  | "breakfast";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in NPR (रू)
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
}

export const categories: Category[] = [
  {
    id: "chiya",
    label: "Chiya (Tea)",
    description:
      "Authentic Nepali chiya brewed fresh — masala, milk, herbal infusions, and more.",
  },
  {
    id: "coffee",
    label: "Coffee",
    description:
      "Freshly brewed coffee from Nepali highland beans, pulled to order.",
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    description:
      "Chilled refreshments — iced chiya, cold coffee, lassi, and lemonades.",
  },
  {
    id: "savory",
    label: "Savory Bites",
    description:
      "Momos, sekuwa, samosas, and snacks to pair with your cup.",
  },
  {
    id: "breakfast",
    label: "Breakfast",
    description:
      "All-day breakfast plates — Nepali classics and café favorites.",
  },
];

export const currency = "रू";

export const formatPrice = (n: number) => `${currency}${n.toLocaleString("en-IN")}`;

export const menuItems: MenuItem[] = [
  // ---------- Chiya (Tea) ----------
  {
    id: "masala-chiya",
    name: "Masala Chiya",
    description:
      "Our signature Nepali milk tea simmered with cardamom, cinnamon, clove, ginger, and black pepper. The cup that started it all.",
    price: 60,
    category: "chiya",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature", "Spiced"],
    popular: true,
    calories: 180,
  },
  {
    id: "milk-chiya",
    name: "Milk Chiya",
    description:
      "Pure, perfectly steeped black tea with full-cream milk and just the right amount of sugar. Comfort in a glass.",
    price: 50,
    category: "chiya",
    image:
      "https://images.unsplash.com/photo-1565452344518-47faca79dc69?auto=format&fit=crop&w=800&q=80",
    tags: ["Classic"],
    calories: 160,
  },
  {
    id: "black-chiya",
    name: "Black Chiya",
    description:
      "Bright, full-bodied Ilam black tea steeped plain — no milk, no sugar, just the leaf.",
    price: 40,
    category: "chiya",
    image:
      "https://sfile.chatglm.cn/images-ppt/a1c799912c0c.jpg",
    tags: ["No Milk"],
    calories: 5,
  },
  {
    id: "tulsi-chiya",
    name: "Tulsi Chiya",
    description:
      "Holy basil leaves steeped with green tea and honey. A soothing, immunity-boosting cup.",
    price: 70,
    category: "chiya",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80",
    tags: ["Herbal", "Caffeine-Free"],
    calories: 30,
  },
  {
    id: "adrak-chiya",
    name: "Adrak Chiya",
    description:
      "Fresh ginger boiled into the tea for a warming, spicy kick. Just the thing for Kathmandu mornings.",
    price: 65,
    category: "chiya",
    image:
      "https://sfile.chatglm.cn/images-ppt/adee1727d6f9.jpg",
    tags: ["Ginger", "Warming"],
    calories: 90,
  },
  {
    id: "lemon-honey",
    name: "Lemon Honey Ginger",
    description:
      "Hot water infused with fresh lemon, ginger, and raw honey. A caffeine-free palate cleanser.",
    price: 75,
    category: "chiya",
    image:
      "https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=80",
    tags: ["Caffeine-Free", "Honey"],
    calories: 60,
  },

  // ---------- Coffee ----------
  {
    id: "espresso",
    name: "Espresso",
    description:
      "A double shot pulled from Nepali highland beans grown in the hills of Palpa. Notes of cocoa and citrus.",
    price: 90,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
    tags: ["Strong", "Nepali Beans"],
    popular: true,
    calories: 5,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description:
      "Double espresso topped with thick microfoam. Equal parts coffee, milk, and foam.",
    price: 130,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    tags: ["Foamy", "Classic"],
    calories: 120,
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    description:
      "Velvety steamed milk over a double shot of espresso, finished with delicate latte art.",
    price: 140,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=80",
    tags: ["Creamy"],
    popular: true,
    calories: 190,
  },
  {
    id: "mocha",
    name: "Dark Mocha",
    description:
      "Double espresso, house-made dark chocolate, and steamed milk. Topped with cocoa dusting.",
    price: 160,
    category: "coffee",
    image:
      "https://sfile.chatglm.cn/images-ppt/81c3b7122df4.jpg",
    tags: ["Chocolate", "Sweet"],
    calories: 260,
  },

  // ---------- Cold Drinks ----------
  {
    id: "iced-chiya",
    name: "Iced Chiya",
    description:
      "Our masala chiya chilled over ice with a splash of milk. A refreshing twist on the classic.",
    price: 90,
    category: "cold-drinks",
    image:
      "https://sfile.chatglm.cn/images-ppt/863d04610847.jpg",
    tags: ["Iced", "Spiced"],
    popular: true,
    calories: 130,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description:
      "Coarse-ground Nepali coffee steeped 18 hours for a smooth, low-acid concentrate over ice.",
    price: 150,
    category: "cold-drinks",
    image:
      "https://sfile.chatglm.cn/images-ppt/78fabd05e0cf.jpg",
    tags: ["18h Steep", "Smooth"],
    calories: 15,
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    description:
      "Espresso blended with chilled milk, ice, and a touch of sugar. Topped with whipped cream.",
    price: 170,
    category: "cold-drinks",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    tags: ["Blended", "Sweet"],
    popular: true,
    calories: 280,
  },
  {
    id: "lassi",
    name: "Mango Lassi",
    description:
      "Thick yogurt blended with Alphonso mango pulp and a pinch of cardamom. Cool and creamy.",
    price: 120,
    category: "cold-drinks",
    image:
      "https://sfile.chatglm.cn/images-ppt/4ea30af7790a.jpg",
    tags: ["Yogurt", "Mango"],
    calories: 220,
  },
  {
    id: "lemonade",
    name: "Fresh Lemonade",
    description:
      "Hand-squeezed lemons, mint leaves, and a touch of honey over crushed ice.",
    price: 100,
    category: "cold-drinks",
    image:
      "https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=800&q=80",
    tags: ["Refreshing", "Mint"],
    calories: 110,
  },

  // ---------- Savory Bites ----------
  {
    id: "veg-momo",
    name: "Veg Momo",
    description:
      "Eight handmade dumplings filled with cabbage, carrot, and onion. Served with our house sesame-tomato achar.",
    price: 140,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    tags: ["Steamed", "Vegetarian"],
    popular: true,
    calories: 320,
  },
  {
    id: "chicken-momo",
    name: "Chicken Momo",
    description:
      "Eight plump dumplings with spiced minced chicken and herbs. With house sesame-tomato achar.",
    price: 180,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Steamed", "Popular"],
    popular: true,
    calories: 380,
  },
  {
    id: "sekuwa",
    name: "Chicken Sekuwa",
    description:
      "Marinated chicken skewers charcoal-grilled over open flame. Smoky, spicy, served with beaten rice.",
    price: 220,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    tags: ["Grilled", "Spicy"],
    calories: 420,
  },
  {
    id: "samosa",
    name: "Samosa (2 pcs)",
    description:
      "Crispy pastry stuffed with spiced potato and peas. Served with tamarind chutney.",
    price: 90,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy", "Vegetarian"],
    calories: 290,
  },
  {
    id: "spring-roll",
    name: "Veg Spring Roll (4 pcs)",
    description:
      "Golden, crispy rolls filled with stir-fried vegetables and glass noodles. With sweet chili sauce.",
    price: 130,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy"],
    calories: 250,
  },
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    description:
      "Triple-decker with chicken, egg, fresh veggies, and house mayo. Served with fries.",
    price: 250,
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    tags: ["Hearty"],
    popular: true,
    calories: 540,
  },

  // ---------- Breakfast ----------
  {
    id: "sel-roti",
    name: "Sel Roti & Achar",
    description:
      "Traditional Nepali ring-shaped rice bread, crispy outside and chewy inside. With tomato achar.",
    price: 90,
    category: "breakfast",
    image:
      "https://sfile.chatglm.cn/images-ppt/e1bf0101a786.jpg",
    tags: ["Traditional", "Rice Bread"],
    popular: true,
    calories: 280,
  },
  {
    id: "aloo-tama",
    name: "Aloo Tama Bodi",
    description:
      "Black-eyed peas, bamboo shoot, and potato curry. A Newari classic served with steamed rice.",
    price: 200,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Newari", "Savory"],
    calories: 380,
  },
  {
    id: "tibetan-bread",
    name: "Tibetan Bread & Honey",
    description:
      "Pan-fried flat bread, soft inside with a crisp golden crust. Drizzled with raw honey.",
    price: 110,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Sweet", "Honey"],
    calories: 310,
  },
  {
    id: "granola-bowl",
    name: "Yogurt & Granola Bowl",
    description:
      "Local dahi, house-baked granola, seasonal fruit, and a drizzle of honey. Light and wholesome.",
    price: 180,
    category: "breakfast",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthy", "Yogurt"],
    calories: 350,
  },
];
