import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Basic validation
    if (!body?.name || !body?.email || !body?.address || !Array.isArray(body?.items)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Simulate creating an order id
    const orderId = Math.random().toString(36).slice(2, 10).toUpperCase();

    return NextResponse.json({ orderId }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
