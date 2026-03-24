import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 79.99,
    originalPrice: 129.99,
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for travel, work, or leisure.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    rating: 4.5,
    reviewCount: 1284,
    stock: 42,
    tags: ["wireless", "noise-cancelling", "bluetooth"],
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.99,
    originalPrice: 199.99,
    description:
      "Elegant minimalist watch with genuine leather strap, sapphire crystal glass, and water resistance up to 50m. A timeless piece for every occasion.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    rating: 4.7,
    reviewCount: 856,
    stock: 18,
    tags: ["watch", "leather", "minimalist"],
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 49.99,
    originalPrice: 69.99,
    description:
      "Compact waterproof speaker with 360° sound, 12-hour playtime, and built-in microphone. Ready for any adventure.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    rating: 4.3,
    reviewCount: 2103,
    stock: 67,
    tags: ["bluetooth", "waterproof", "portable"],
  },
  {
    id: 4,
    name: "Slim Fit Crew-Neck T-Shirt",
    price: 24.99,
    description:
      "100% organic cotton slim-fit tee. Breathable, soft, and pre-shrunk. Available in 12 colors and sizes XS–3XL.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    rating: 4.4,
    reviewCount: 5421,
    stock: 200,
    tags: ["cotton", "organic", "casual"],
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 299.99,
    originalPrice: 399.99,
    description:
      "Fully adjustable lumbar support, breathable mesh back, and 4D armrests. Engineered for all-day comfort during long work sessions.",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
    rating: 4.6,
    reviewCount: 743,
    stock: 12,
    tags: ["ergonomic", "office", "mesh"],
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    description:
      "Double-wall vacuum insulated 32oz bottle. Keeps drinks cold 24 hrs and hot 12 hrs. BPA-free and leak-proof lid included.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    rating: 4.8,
    reviewCount: 3897,
    stock: 150,
    tags: ["insulated", "bpa-free", "eco"],
  },
  {
    id: 7,
    name: "Running Shoes Pro",
    price: 119.99,
    originalPrice: 159.99,
    description:
      "Lightweight responsive foam midsole with breathable mesh upper. Ideal for road running and daily training. Sizes 6–13.",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    rating: 4.5,
    reviewCount: 2210,
    stock: 55,
    tags: ["running", "lightweight", "breathable"],
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 89.99,
    originalPrice: 119.99,
    description:
      "Tenkeyless TKL layout with Cherry MX Brown switches, per-key RGB lighting, and detachable USB-C cable. Built for productivity and gaming.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    rating: 4.6,
    reviewCount: 1567,
    stock: 34,
    tags: ["mechanical", "rgb", "gaming"],
  },
  {
    id: 9,
    name: "Ceramic Pour-Over Coffee Set",
    price: 44.99,
    description:
      "Hand-crafted ceramic dripper with server and two mugs. Brews a clean, flavourful cup. Dishwasher safe.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    rating: 4.7,
    reviewCount: 618,
    stock: 29,
    tags: ["coffee", "ceramic", "handcrafted"],
  },
  {
    id: 10,
    name: "Yoga Mat Premium",
    price: 54.99,
    originalPrice: 74.99,
    description:
      "6mm thick non-slip natural rubber mat with alignment lines. Extra-long 72\", moisture-wicking surface, and carrying strap included.",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1601925228008-3d62c5c32e49?w=600&q=80",
    rating: 4.4,
    reviewCount: 934,
    stock: 80,
    tags: ["yoga", "non-slip", "natural rubber"],
  },
  {
    id: 11,
    name: "Smart LED Desk Lamp",
    price: 39.99,
    description:
      "Touch-dimming lamp with 5 colour temperatures (2700K–6500K), USB-A charging port, and memory function. Flicker-free for eye comfort.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    rating: 4.3,
    reviewCount: 1102,
    stock: 76,
    tags: ["led", "dimmable", "usb-charging"],
  },
  {
    id: 12,
    name: "Linen Tote Bag",
    price: 19.99,
    description:
      "Durable 100% natural linen tote with reinforced handles and interior pocket. Folds flat for easy storage. Eco-friendly everyday carry.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    rating: 4.5,
    reviewCount: 2456,
    stock: 300,
    tags: ["linen", "eco", "tote"],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
