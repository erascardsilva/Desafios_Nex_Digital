import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios
      .post('http://localhost:9000/nexApi/login', { email, password })
      .then((response) => {
        setSubmitting(false);
        // Redirecionar para outra rota
        navigate('/acessologin');
      })
      .catch((error) => {
        setSubmitting(false);
        setError('Ocorreu um erro ao fazer login. Verifique suas credenciais e tente novamente.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login de Usuário</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginUser;


