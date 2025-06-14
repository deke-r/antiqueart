import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await db.execute(`
      SELECT id, name, image, description,slug 
      FROM categories 
      WHERE active = 1 
      ORDER BY id DESC 
      LIMIT 12
    `);

    console.log(rows)
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ success: false, message: "Failed to load categories" }, { status: 500 });
  }
}
