const express = require('express');
const router = express.Router();
const { User } = require('../data/user'); 

// Rota GET para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); // Obtém todos os usuários do banco de dados
    res.json(users); // Retorna os usuários como resposta
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
});

// Rota POST para criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Cria um novo usuário no banco de dados
    const newUser = await User.create({ name, email, password });

    res.status(201).json(newUser); // Retorna o novo usuário criado como resposta
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = router;
