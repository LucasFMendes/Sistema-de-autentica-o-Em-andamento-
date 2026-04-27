import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function criptografarSenha(senha) {
  return bcrypt.hash(senha, SALT_ROUNDS);
}

export async function compararSenha(senha, hash) {
  return bcrypt.compare(senha, hash);
}