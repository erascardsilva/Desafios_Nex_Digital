var express = require('express');
var router = express.Router();
const criarUsuario = require('../data/criarUsuario');

// Rota GET para obter todos os usuários
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Rota POST para criar um novo usuário
router.post('/', async function(req, res, next) {
  try {
    const usuario = req.body;
    const novoUsuario = await criarUsuario(usuario);
    res.json({ message: 'Usuário criado com sucesso', data: novoUsuario });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});

module.exports = router;
