import db from '@/utils/db';
import bcrypt from 'bcryptjs';
import moment from 'moment-timezone';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

  
    const [existing] = await db.execute('SELECT id FROM user_accounts WHERE email = ?', [email]);
    if (existing.length > 0) {
      return new Response(JSON.stringify({ message: 'Email already exists' }), { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get IST time using moment-timezone
    const createdAt = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');

    // Insert into MySQL
    await db.execute(
      `INSERT INTO user_accounts 
       (name, email, password, role, is_active, created_at, last_login) 
       VALUES (?, ?, ?, ?, ?, ?, NULL)`,
      [name, email, hashedPassword, 'user', '1', createdAt]
    );

    return new Response(JSON.stringify({ message: 'User registered successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
