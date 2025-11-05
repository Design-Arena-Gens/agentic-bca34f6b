"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotalCents } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h1>Your cart is empty</h1>
        <p style={{ color: "#666" }}>Browse our collection to add items.</p>
        <Link href="/" style={{ color: "#111" }}>
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28 }}>
      <div style={{ display: "grid", gap: 14 }}>
        {items.map((item) => (
          <div
            key={item.productId}
            style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 14, alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: 14 }}
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={120}
              height={120}
              style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
            />
            <div style={{ display: "grid", gap: 6 }}>
              <Link href={`/product/${item.slug}`} style={{ color: "#111", textDecoration: "none", fontWeight: 600 }}>
                {item.name}
              </Link>
              <div>{formatPrice(item.priceCents)}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <label htmlFor={`qty-${item.productId}`} style={{ color: "#666" }}>Qty</label>
                <input
                  id={`qty-${item.productId}`}
                  type="number"
                  min={1}
                  max={99}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value || "1", 10))}
                  style={{ width: 60, padding: 6, borderRadius: 6, border: "1px solid #ddd" }}
                />
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.productId)}
              style={{ background: "transparent", border: "1px solid #ddd", borderRadius: 8, padding: "8px 10px", cursor: "pointer" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <aside style={{ border: "1px solid #eee", borderRadius: 10, padding: 16, alignSelf: "start" }}>
        <h2 style={{ marginTop: 0 }}>Order Summary</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span>Subtotal</span>
          <strong>{formatPrice(subtotalCents)}</strong>
        </div>
        <div style={{ color: "#666", fontSize: 14, marginBottom: 16 }}>
          Shipping and taxes calculated at checkout.
        </div>
        <Link href="/checkout" style={{ display: "block", textAlign: "center", background: "#111", color: "#fff", padding: "10px 12px", borderRadius: 8, textDecoration: "none" }}>
          Checkout
        </Link>
      </aside>
    </div>
  );
}
