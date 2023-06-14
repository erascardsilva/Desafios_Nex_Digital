import React, { useState } from 'react';
import axios from 'axios';
import './FormC.css'; 

const CadastreUser = () => {
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
      .post('http://localhost:8000/signup', { name, email, password })
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
    <div className="cadastre-container">
      <h2>Cadastro de Usuário</h2>
      <form className="cadastre-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            className="input-field"
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
            className="input-field"
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
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={submitting} className="submit-button">
          {submitting ? 'Enviando...' : 'Cadastrar'}
        </button>
        {submitted && <p>Cadastro enviado com sucesso!</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CadastreUser;
