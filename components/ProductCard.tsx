"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import AddToCartButton from "@/components/actions/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 10,
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href={`/product/${product.slug}`} style={{ display: "block" }}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={600}
          style={{ width: "100%", height: 260, objectFit: "cover" }}
        />
      </Link>
      <div style={{ padding: 14, display: "grid", gap: 6 }}>
        <Link
          href={`/product/${product.slug}`}
          style={{
            fontWeight: 600,
            color: "#111",
            textDecoration: "none",
          }}
        >
          {product.name}
        </Link>
        <div style={{ color: "#666", fontSize: 14 }}>{product.category}</div>
        <div style={{ fontWeight: 700 }}>{formatPrice(product.priceCents)}</div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
