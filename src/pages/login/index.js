import { useState } from 'react';
import './style.css';

function Login() {

    const [
        email,
        setEmail,
        senha,
        setSenha
     ] = useState(" ");

    return (
        <div className='container-login'>
            <div className='card-login'>
                <h1>LOGIN</h1>
                <h3>Informe suas credenciais para acesso</h3>
                <div className='data-input'>
                    <label htmlFor='email'>E-mail:</label>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

                    <label htmlFor='pass'>Senha:</label>
                    <input type="text" value={senha} onChange={e=> setSenha(e.target.value)} />

                    <button>Entrar</button>

                    <span>Não possui credenciais?</span>
                    <a href='www#'>Cadastre-se</a>
                </div>
            </div>

        </div>
    )
}

export default Login;