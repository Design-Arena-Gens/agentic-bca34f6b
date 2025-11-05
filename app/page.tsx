import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = getAllProducts();
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <section style={{ textAlign: "center", padding: "30px 0" }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>New Arrivals</h1>
        <p style={{ color: "#666", marginTop: 8 }}>
          Everyday essentials and seasonal standouts.
        </p>
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
}
