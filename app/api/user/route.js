import { validateToken } from '../../../utils/auth';
import db from '../../../utils/db';

export async function GET(req) {
  try {
    const decoded = validateToken(req);

    const [rows] = await db.execute(
      'SELECT id, name, email FROM user_accounts WHERE id = ? AND is_active = "1"',
      [decoded.id]
    );

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ message: 'User not found or inactive' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const user = rows[0];
    console.log('user: ', user);

    return new Response(
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
