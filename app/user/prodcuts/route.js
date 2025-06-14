import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let query = `SELECT id, name, price, cover_image, rating, category_id FROM products WHERE active = 1`;
    let values = [];

    if (category && category !== "all") {
      query += ` AND category_id = ?`;
      values.push(category);
    }

    const [rows] = await db.execute(query, values);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
