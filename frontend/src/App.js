import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navmenu from './parts/Navmenu';
import HomeStart from './parts/HomeStart';
import LoginUser from './parts/LoginUser';
import CadastUser from './parts/CadastreUse';
import LoginAcesso from './parts/LoginAcesso';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch('http://localhost:9000/nexApi')
      .then(res => {
        if (!res.ok) {
          throw new Error('Falha na conexão com o servidor.');
        }
        return res.text();
      })
      .then(res => this.setState({ apiResponse: res }))
      .catch(error => this.setState({ apiResponse: error.message }));
  }

  render() {
    return (
      
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
                <Route path="/acessologin" element={<LoginAcesso />} />
              </Routes>
              <p className="App-intro">{this.state.apiResponse}</p>
            </div>
          </div>
        </Router>
     
    );
  }
}

export default App;
