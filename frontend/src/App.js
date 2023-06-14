import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navmenu from './parts/Navmenu';
import HomeStart from './parts/HomeStart';
import LoginUser from './parts/LoginUser';
import CadastUser from './parts/CadastreUse';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="nex-grid">
        <div id="item-0">
          <Navmenu />
        </div>
          <div id="item-1">
            <Routes>
              <Route path="/" element={<HomeStart />} />
              <Route path="/login" element={<LoginUser />} />
              <Route path="/cadastro" element={<CadastUser />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
