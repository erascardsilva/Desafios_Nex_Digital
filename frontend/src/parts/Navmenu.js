import React, { useState } from 'react';
import nexLogo from '../image/nexLogo.png';

function Navmenu() {
    return (
        <div>
           <img src= {nexLogo} alt="Logo da NEX DIGITAL" />
            <nav>

                <ul class="menu">
                       
                    <li class="item button"><a href="#" title="Entrar"><i class="icon icon-plug"></i> Entrar</a></li>
                    <li class="item button secondary"><a href="#" title="Cadastro"><i class="icon icon-lock-1"></i> Cadastro</a></li>
                    <li class="toggle"><span class="bars"></span></li>
                 </ul>
            </nav >
        </div >
);
};

export default Navmenu;