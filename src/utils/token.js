import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export function gerarToken(user) {
  return jwt.sign(
    { id: user.id },
    secret,
    { expiresIn: '1d' }
  );
}

export function verificarToken(token) {
  return jwt.verify(token, secret);
}