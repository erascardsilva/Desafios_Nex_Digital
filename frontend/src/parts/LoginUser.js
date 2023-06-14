import React, { useState } from 'react';
import axios from 'axios';

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

    axios.post('http://localhost:3000/signup', { name, email, password })
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
    <div>
      <h2>Login de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Cadastrar'}
        </button>
        {submitted && <p>Logando !</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginUser;
