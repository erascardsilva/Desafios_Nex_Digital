import React from 'react';
import { Link } from 'react-router-dom';
import nexLogo from '../image/nexLogo.png';

function Navmenu() {
  return (
    <div>
      <img src={nexLogo} alt="Logo da NEX DIGITAL" style={{ width: '190px', height: 'auto' }}/>
      <nav>
        <ul className="menu">
        <li className="item button secondary">
            <Link to="/" title="Inicio">
              <i className="icon icon-lock-1"></i> Home
            </Link>
          </li>

          <li className="item button">
            <Link to="/login" title="Entrar">
              <i className="icon icon-plug"></i> Efetuar Login
            </Link>
          </li>
          <li className="item button secondary">
            <Link to="/cadastro" title="Cadastro">
              <i className="icon icon-lock-1"></i> Cadastrar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navmenu;
