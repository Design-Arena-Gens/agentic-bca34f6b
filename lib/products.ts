export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  imageUrl: string;
  category: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: "p-tee-classic",
    slug: "classic-tee",
    name: "Classic Tee",
    description: "Soft cotton tee with a classic fit.",
    priceCents: 2200,
    imageUrl:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop",
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "p-hoodie-oversized",
    slug: "oversized-hoodie",
    name: "Oversized Hoodie",
    description: "Cozy fleece hoodie with drop shoulders.",
    priceCents: 5400,
    imageUrl:
      "https://images.unsplash.com/photo-1548883354-7622d03acae1?q=80&w=1600&auto=format&fit=crop",
    category: "Outerwear",
    sizes: ["S", "M", "L"],
  },
  {
    id: "p-jeans-slim",
    slug: "slim-jeans",
    name: "Slim Jeans",
    description: "Stretch denim with a modern slim cut.",
    priceCents: 6900,
    imageUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    category: "Bottoms",
    sizes: ["28", "30", "32", "34"],
  },
  {
    id: "p-dress-midi",
    slug: "midi-dress",
    name: "Midi Dress",
    description: "Flowy midi dress with pockets.",
    priceCents: 7800,
    imageUrl:
      "https://images.unsplash.com/photo-1520975922171-6e9287f1a247?q=80&w=1600&auto=format&fit=crop",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p-jacket-denim",
    slug: "denim-jacket",
    name: "Denim Jacket",
    description: "Timeless denim jacket with vintage wash.",
    priceCents: 8500,
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "p-sneaker-canvas",
    slug: "canvas-sneakers",
    name: "Canvas Sneakers",
    description: "Lightweight canvas sneakers for everyday wear.",
    priceCents: 6200,
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    category: "Footwear",
  },
  {
    id: "p-skirt-pleated",
    slug: "pleated-skirt",
    name: "Pleated Skirt",
    description: "Elegant pleated skirt, midi length.",
    priceCents: 5600,
    imageUrl:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1600&auto=format&fit=crop",
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "p-coat-wool",
    slug: "wool-coat",
    name: "Wool Coat",
    description: "Warm wool coat with tailored silhouette.",
    priceCents: 12900,
    imageUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    category: "Outerwear",
    sizes: ["S", "M", "L"],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
