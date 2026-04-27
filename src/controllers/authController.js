import { compararSenha, criptografarSenha } from '../services/authService.js';
import { gerarToken } from '../utils/token.js';
import { buscarUsuarioPorEmail, criarUsuario } from '../repositories/userRepository.js';

export async function register(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // verifica se já existe no banco
    const usuarioExistente = await buscarUsuarioPorEmail(email);

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Email já cadastrado' });
    }

    // criptografa senha
    const senhaCriptografada = await criptografarSenha(senha);

    // salva no banco
    const novoUsuario = await criarUsuario(nome, email, senhaCriptografada);

    return res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro no register' });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    // busca no banco
    const user = await buscarUsuarioPorEmail(email);

    if (!user) {
      return res.status(400).json({ mensagem: 'Usuário não encontrado' });
    }

    // compara senha
    const senhaValida = await compararSenha(senha, user.senha);

    if (!senhaValida) {
      return res.status(400).json({ mensagem: 'Senha inválida' });
    }

    // gera token
    const token = gerarToken(user);

    return res.json({ token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro no login' });
  }
}