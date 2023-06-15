const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

// Importar rotas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const nexApiRouter = require('./routes/nexApi');
const loginRouter = require('./routes/nexApiLogin');


// Importar conexão com o banco de dados
const sequelize = require('./data/database');

const app = express();

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
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Registrar rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nexApi', nexApiRouter);
app.use('/nexApi/login', loginRouter); // Adicionar rota de login

// Tratamento de erros
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
