import { useState } from "react";
import fullImage from '../image/full.png';
import nexLogo from '../image/nexLogo.png';

function LoginAcesso() {
    return (
        <div>
            <figure className="profile-card">
                <div className="profile-header">
                    <img src={fullImage} alt="Capa Perfil" style={{ width: '350px', height: 'auto' }} />
                </div>
                <div className="profile-body">
                    <div className="img-perfil">
                        <img src={nexLogo} title="Nex Digital" alt="perfil" />
                    </div>
                    <div className="titulo">Acesso  </div>
                    <figcaption className="descricao">
                        <p>
                            <b>App Node Nex Digital</b><br />
                            Backend (Node.js & Express & sequelize)<br />
                            Frontend (React) <br />
                            Banco de dados - PostgreSQL
                        </p>
                    </figcaption>
                    
                </div>
            </figure>
        </div>
    );
}

export default LoginAcesso;
