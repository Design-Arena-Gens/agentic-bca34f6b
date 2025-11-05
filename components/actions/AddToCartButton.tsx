"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);

  const onAdd = () => {
    setAdding(true);
    addToCart(product, 1);
    setTimeout(() => setAdding(false), 400);
  };

  return (
    <button
      onClick={onAdd}
      disabled={adding}
      style={{
        background: "#111",
        color: "#fff",
        border: 0,
        borderRadius: 8,
        padding: "10px 12px",
        cursor: "pointer",
      }}
    >
      {adding ? "Adding..." : "Add to cart"}
    </button>
  );
}
