import { NextResponse } from 'next/server';
import db from '@/utils/db';



export async function DELETE(_, { params }) {
  const { id } = params;

  await db.query('DELETE FROM categories WHERE id = ?', [id]);
  return NextResponse.json({ message: 'Category deleted successfully' });
}

export async function PATCH(req, { params }) {
  const { id } = params;
  const { active } = await req.json();

  await db.query('UPDATE categories SET active = ? WHERE id = ?', [active, id]);
  return NextResponse.json({ message: 'Status updated' });
}
