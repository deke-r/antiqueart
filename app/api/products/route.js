import { NextResponse } from "next/server"
import db from "@/utils/db"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

const uploadDir = path.join(process.cwd(), "public", "uploads")

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const withBanners = searchParams.get("withBanners") === "true"

    const query = "SELECT * FROM products ORDER BY id DESC"
    const [products] = await db.query(query)

    if (withBanners) {
      // Fetch banners for each product
      for (const product of products) {
        const [banners] = await db.query("SELECT * FROM product_banners WHERE product_id = ?", [product.id])
        product.banners = banners
      }
    }

    return NextResponse.json(products)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await mkdir(uploadDir, { recursive: true })

    const formData = await request.formData()

    const name = formData.get("name")
    const sku = formData.get("sku")
    const price = formData.get("price")
    const stock = formData.get("stock") || "0"
    const categoryId = formData.get("categoryId")

    // Handle cover image
    const coverImageFile = formData.get("cover_image")
    let coverImagePath = null

    if (coverImageFile && coverImageFile.size > 0) {
      const bytes = await coverImageFile.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const fileName = `${Date.now()}_${coverImageFile.name}`
      coverImagePath = `/uploads/${fileName}`

      await writeFile(path.join(uploadDir, fileName), buffer)
    }

    // Insert product
    const [result] = await db.query(
      `INSERT INTO products (name, sku, price, stock, category_id, cover_image, active) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, sku, Number.parseFloat(price), Number.parseInt(stock), Number.parseInt(categoryId), coverImagePath, 1],
    )

    const productId = result.insertId

    // Handle banner images
    const bannerFiles = formData.getAll("banners")

    for (const file of bannerFiles) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const fileName = `${Date.now()}_${file.name}`
        const bannerPath = `/uploads/${fileName}`

        await writeFile(path.join(uploadDir, fileName), buffer)

        await db.query(`INSERT INTO product_banners (product_id, image_path) VALUES (?, ?)`, [productId, bannerPath])
      }
    }

    return NextResponse.json({ success: true, productId })
  } catch (err) {
    console.error("Error creating product:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
