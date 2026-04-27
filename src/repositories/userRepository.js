import { pool } from '../database/connection.js';

export async function buscarUsuarioPorEmail(email) {
  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await pool.query(query, [email]);

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
}

export async function criarUsuario(nome, email, senha) {
  try {
    const query = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const result = await pool.query(query, [nome, email, senha]);

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}
export async function buscarUsuarioPorId(id) {
  try {
    const query = 'SELECT id, nome, email FROM usuarios WHERE id = $1';
    const result = await pool.query(query, [id]);

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    throw error;
  }
}

export async function listarUsuarios() {
  try {
    const query = 'SELECT id, nome, email FROM usuarios';
    const result = await pool.query(query);

    return result.rows;
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
}