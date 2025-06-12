import db from '@/utils/db';
import nodemailer from 'nodemailer';
import { generateOtp } from '@/utils/generateOtp';
import moment from 'moment-timezone';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });

    const otp = generateOtp();
    const expiresAt = moment().tz('Asia/Kolkata').add(10, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    const createdAt = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');

    await db.execute(
      'INSERT INTO user_otps (email, otp, expires_at,created_at) VALUES (?, ?, ?,?)',
      [email, otp, expiresAt,createdAt]
    );

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

await transporter.sendMail({
  from: `"ANTIQUEARTS" <${process.env.SMTP_EMAIL}>`,
  to: email,
  subject: 'Your OTP Code',
  html: `
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border: 1px solid #e0e0e0; padding: 40px; border-radius: 8px;">
        <tr>
          <td style="text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 20px;">
            <h2 style="margin: 0; font-size: 22px; color: #333;">One-Time Password (OTP)</h2>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px 0; color: #555; font-size: 15px; line-height: 24px;">
            <p>Hi,</p>
            <p>To enhance the security of your account, we’ve sent you a One-Time Password (OTP) for verification. Please enter the code below to proceed:</p>
            <p style="text-align: center; font-size: 24px; font-weight: bold; color: #007bff; margin: 30px 0;">${otp}</p>
            <p>This OTP is valid for <strong>10 minutes</strong> and can only be used once. Do not share it with anyone.</p>
            <p>Thank you,<br/>ANTIQUEARTS Team</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; padding-top: 20px;">
            <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="Security Icon" width="40" style="opacity: 0.6;" />
          </td>
        </tr>
      </table>
      <table width="600" style="margin-top: 15px;">
        <tr>
          <td style="text-align: center; font-size: 12px; color: #aaa;">
            © ${new Date().getFullYear()} ANTIQUEARTS. All rights reserved.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`,
});


    return new Response(JSON.stringify({ message: 'OTP sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('OTP Send Error:', error);
    return new Response(JSON.stringify({ message: 'Failed to send OTP' }), { status: 500 });
  }
}
