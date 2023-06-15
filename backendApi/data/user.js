const sequelize = require('./database.js');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Função para verificar a password fornecida pelo usuário
Users.prototype.verificarPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Função para gerar um token JWT para o usuário
Users.prototype.gerarTokenJWT = function () {
  const payload = {
    id: this.id,
    name: this.name,
    email: this.email
  };

  return jwt.sign(payload, 'chave_secreta', { expiresIn: '1h' });
};

// Hooks do Sequelize para hashear a password antes de salvar no banco de dados
Users.beforeSave(async (user) => {
  if (user.changed('password')) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }
});

module.exports = Users;
