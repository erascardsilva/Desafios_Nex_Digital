const Users = require('./user');

async function criarUsuario(usuario) {
  try {
    const novoUsuario = await Users.create({
      name: usuario.name,
      email: usuario.email,
      password: usuario.password
    });
    console.log('Novo usuário criado:', novoUsuario.toJSON());
    return novoUsuario;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}

module.exports = criarUsuario;
