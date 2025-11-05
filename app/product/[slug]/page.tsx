import Image from "next/image";
import { formatPrice, getAllProducts, getProductBySlug } from "@/lib/products";
import AddToCartButton from "@/components/actions/AddToCartButton";
import Link from "next/link";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return <div>Product not found.</div>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28 }}>
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={1000}
          height={800}
          style={{ width: "100%", height: "auto", borderRadius: 12 }}
        />
      </div>
      <div style={{ display: "grid", gap: 14, alignContent: "start" }}>
        <Link href="/" style={{ color: "#555", textDecoration: "none" }}>
          ? Back to shop
        </Link>
        <h1 style={{ margin: 0 }}>{product.name}</h1>
        <div style={{ color: "#666" }}>{product.category}</div>
        <div style={{ fontWeight: 700, fontSize: 20 }}>
          {formatPrice(product.priceCents)}
        </div>
        <p style={{ lineHeight: 1.6 }}>{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
