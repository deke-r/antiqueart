import db from '@/utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import moment from 'moment-timezone';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
      });
    }

    const [users] = await db.execute(
      'SELECT id, email, password FROM user_accounts WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
    }

    const user = users[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
    }


    const loginTime = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
    await db.execute('UPDATE user_accounts SET last_login = ? WHERE id = ?', [
      loginTime,
      user.id,
    ]);


    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
      }
    );

  
    const userData = {
      id: user.id,
      email: user.email,
      lastLogin: loginTime,
      token, 
    };

    return new Response(JSON.stringify({ message: 'Login successful', user: userData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
}
