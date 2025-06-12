import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET 

export function validateToken(req) {
const authHeader = req.headers.get('authorization'); 


  if (!authHeader) {
    throw new Error('Authorization header missing');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new Error('Token missing');
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; 
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}
