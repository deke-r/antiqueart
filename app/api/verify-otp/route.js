import db from '@/utils/db';
import moment from 'moment-timezone';

export async function POST(req) {
  const { email, otp } = await req.json();

  const [rows] = await db.execute(
    'SELECT * FROM user_otps WHERE email = ? AND otp = ? ORDER BY created_at DESC LIMIT 1',
    [email, otp]
  );

  if (rows.length === 0) {
    return new Response(JSON.stringify({ message: 'Invalid OTP' }), { status: 400 });
  }

  const isExpired = moment().isAfter(moment(rows[0].expires_at));
  if (isExpired) {
    return new Response(JSON.stringify({ message: 'OTP expired' }), { status: 400 });
  }

  return new Response(JSON.stringify({ message: 'OTP verified' }), { status: 200 });
}
