import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';
import db from '@/utils/db';

export async function GET() {
  const [rows] = await db.query('SELECT * FROM categories ORDER BY id DESC');
  return NextResponse.json(rows);
}

export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get('name');
  const slug = formData.get('slug') || name.toLowerCase().replace(/\s+/g, '-');
  const description = formData.get('description');
  const image = formData.get('image'); 

  let fileName = null;

  if (image && typeof image === 'object' && image.name) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public/uploads/categories');
    await mkdir(uploadDir, { recursive: true }); 

    fileName = Date.now() + '-' + image.name;
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);
  }

  await db.query(
    'INSERT INTO categories (name, slug, description, image) VALUES (?, ?, ?, ?)',
    [name, slug, description, fileName]
  );

  return NextResponse.json({ message: 'Category added successfully' });
}
