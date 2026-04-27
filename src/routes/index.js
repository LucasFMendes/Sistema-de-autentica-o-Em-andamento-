import express from 'express';
import { login, register } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { buscarUsuarioPorId, listarUsuarios } from '../repositories/userRepository.js';

const router = express.Router();

// ROTAS
router.post('/login', login);
router.post('/usuarios', register); // 👈 usa register
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const usuario = await buscarUsuarioPorId(req.usuario.id);
    return res.json({ usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro ao buscar perfil' });
  }
});
router.get('/usuarios', authMiddleware, async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    return res.json(usuarios);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro ao listar usuários' });
  }
});

export default router;