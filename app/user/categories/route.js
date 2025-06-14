import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT id, name, image FROM categories WHERE active = 1");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
