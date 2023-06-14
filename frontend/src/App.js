import React, { useState } from 'react';
import './App.css';
import Navmenu from './parts/Navmenu';
import HomeStart from './parts/HomeStart';
import LoginUser from './parts/LoginUser';
import CadastreUser from './parts/CadastreUse';


function App() {
  const [activeContent, setActiveContent] = useState('signup');
  const handleContentChange = (content) => {
    setActiveContent(content);
  };


  return (
    <div className="App">
      <div className="nex-grid">
        <div id="item-0">
          
          <Navmenu />
        </div>
        <div id="item-1">
        {activeContent === 'signup' && (
            <div>
              <HomeStart />
            </div>
          )}

          {activeContent === 'LoginUser' && (
            <div>
              
              <LoginUser />
            </div>
          )}

          {activeContent === 'CadastreUser' && (
            <div>
              
              <CadastreUser />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
