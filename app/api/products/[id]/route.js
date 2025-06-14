import { NextResponse } from "next/server"
import db from "@/utils/db"

export async function PATCH(request, { params }) {
  const { id } = params

  try {
    const [rows] = await db.query(`SELECT active FROM products WHERE id = ?`, [id])

    if (rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const currentStatus = rows[0].active
    const newStatus = currentStatus ? 0 : 1

    await db.query(`UPDATE products SET active = ? WHERE id = ?`, [newStatus, id])

    return NextResponse.json({ success: true, newStatus })
  } catch (err) {
    console.error("Error updating product:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const { id } = params

  try {
    // Delete related banners first
    await db.query(`DELETE FROM product_banners WHERE product_id = ?`, [id])

    // Then delete the product
    const [result] = await db.query(`DELETE FROM products WHERE id = ?`, [id])

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error deleting product:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
