const express = require('express');
const router = express.Router();

// Rota GET para obter todos os usuários
router.get('/', (req, res) => {
    // Lógica para obter todos os usuários
    res.send('Obter todos os usuários');
  });
  
  // Rota POST para criar um novo usuário
  router.post('/', (req, res) => {
    // Lógica para criar um novo usuário
    res.send('Criar um novo usuário');
  });
module.exports = router;
