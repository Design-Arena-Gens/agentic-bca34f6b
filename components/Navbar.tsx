"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Navbar() {
  const { itemCount } = useCart();
  return (
    <header style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href="/" style={{
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.3,
          textDecoration: "none",
          color: "#111",
        }}>Clothify</Link>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Link href="/" style={{ color: "#333", textDecoration: "none" }}>Shop</Link>
          <Link href="/cart" style={{ color: "#333", textDecoration: "none" }}>
            Cart{itemCount > 0 ? ` (${itemCount})` : ""}
          </Link>
        </div>
      </nav>
    </header>
  );
}
