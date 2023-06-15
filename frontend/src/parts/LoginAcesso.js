import { useState } from "react";
import fullImage from '../image/full.png';
import nexLogo from '../image/loginok.jpg';

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
                    <div className="titulo">Acesso Garantido  </div>
                    <figcaption className="descricao">
                        <p>
                            <b>Login Garantido</b><br />
                            Aplicativo Finalizado<br />
                            Espero ter resolvido as questoes <br />
                            Obrigado
                        </p>
                    </figcaption>
                    
                </div>
            </figure>
        </div>
    );
}

export default LoginAcesso;
