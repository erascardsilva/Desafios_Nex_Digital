import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const LoginUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios
      .post('http://localhost:3000/signup', { name, email, password })
      .then((response) => {
        setSubmitting(false);
        setSubmitted(true);
        setName('');
        setEmail('');
        setPassword('');
        setError(null);
      })
      .catch((error) => {
        setSubmitting(false);
        setError('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login de Usuário</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting} className="btn">
          {submitting ? 'Enviando...' : 'Logar'}
        </button>
        {submitted && <p>Logando !</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginUser;
