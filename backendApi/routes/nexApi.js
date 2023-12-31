const express = require('express');
const router = express.Router();
const Users = require('../data/user');
const { criarUsuario } = require('../controller/userController');

// Rota POST para cadastro
router.post('/', async function(req, res, next) {
  const { name, email, password } = req.body;

  try {
    // Verificar se o usuário já está cadastrado
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Usuário já cadastrado' });
    }

    // Criar um novo usuário no banco de dados
    const newUser = await criarUsuario({ name, email, password });
    return res.status(200).json({ message: 'Cadastro realizado com sucesso', user: newUser });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ message: 'Ocorreu um erro ao cadastrar o usuário' });
  }
});

// Rota POST para login
router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;

  try {
    // Verificar se as credenciais estão corretas
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const isPasswordValid = await user.verificarPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ message: 'Ocorreu um erro ao realizar o login' });
  }
});

// Rota GET para verificar conexão
router.get('/', function(req, res, next) {
  res.send('Front-end e Back-end conectados. Porta do backend: 9000, Porta do frontend: 3000');
});

module.exports = router;
