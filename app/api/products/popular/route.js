import { NextResponse } from "next/server";
import db from "@/utils/db"; 

export async function GET() {
  try {
    const [rows] = await db.execute(`
      SELECT id, name, price, cover_image 
      FROM products 
      WHERE active = 1 
      ORDER BY id DESC 
      LIMIT 8
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching popular products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
