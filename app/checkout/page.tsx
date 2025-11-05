"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { items, subtotalCents, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      address: String(form.get("address") || ""),
      items: items.map((i) => ({
        productId: i.productId,
        quantity: i.quantity,
      })),
      subtotalCents,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const data = (await res.json()) as { orderId: string };
      clearCart();
      router.push(`/success?orderId=${data.orderId}`);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <h1>Checkout</h1>
        <label>
          <div style={{ marginBottom: 6 }}>Full name</div>
          <input name="name" required placeholder="Jane Doe" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
        </label>
        <label>
          <div style={{ marginBottom: 6 }}>Email</div>
          <input name="email" type="email" required placeholder="jane@example.com" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #ddd" }} />
        </label>
        <label>
          <div style={{ marginBottom: 6 }}>Shipping address</div>
          <textarea name="address" required placeholder="123 Main St, City, Country" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #ddd", minHeight: 80 }} />
        </label>
        {error && <div style={{ color: "#b00020" }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ background: "#111", color: "#fff", border: 0, borderRadius: 8, padding: "10px 12px", cursor: "pointer" }}>
          {loading ? "Processing..." : "Place order"}
        </button>
      </form>
      <aside style={{ border: "1px solid #eee", borderRadius: 10, padding: 16, alignSelf: "start" }}>
        <h2 style={{ marginTop: 0 }}>Order Summary</h2>
        <div style={{ display: "grid", gap: 8 }}>
          {items.map((i) => (
            <div key={i.productId} style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {i.name} ? {i.quantity}
              </div>
              <div>{formatPrice(i.priceCents * i.quantity)}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, borderTop: "1px solid #eee", paddingTop: 12 }}>
          <strong>Subtotal</strong>
          <strong>{formatPrice(subtotalCents)}</strong>
        </div>
      </aside>
    </div>
  );
}
