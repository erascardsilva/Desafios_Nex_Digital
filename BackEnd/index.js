const express = require('express');
const app = express();
const sequelize = require('./data/database.js');
const PORT = process.env.PORT || 3000;

// Importar as rotas
const userRoutes = require('./routes/usersRoutes.js');
//const productRoutes = require('./routes/productRoutes');

// Testar conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Falha ao conectar-se ao banco de dados:', error);
  });

// Configurar middlewares
app.use(express.json());

// Definir as rotas
app.use('/api/users', userRoutes);
//app.use('/api/products', productRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
