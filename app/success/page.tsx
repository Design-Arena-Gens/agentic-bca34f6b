import { redirect } from "next/navigation";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams.orderId;
  if (!orderId) redirect("/");

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1>Thank you for your order!</h1>
      <p style={{ color: "#666" }}>Your order id is {orderId}.</p>
    </div>
  );
}
