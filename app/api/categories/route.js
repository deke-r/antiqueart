import { NextResponse } from 'next/server';
import db from '@/utils/db';

export async function GET() {
  const [rows] = await db.query('SELECT * FROM categories ORDER BY id DESC');
  return NextResponse.json(rows);
}

export async function POST(req) {
  const { name, slug, description } = await req.json();

  await db.query(
    'INSERT INTO categories (name, slug, description) VALUES (?, ?, ?)',
    [name, slug || name.toLowerCase().replace(/\s+/g, '-'), description]
  );

  return NextResponse.json({ message: 'Category added successfully' });
}
