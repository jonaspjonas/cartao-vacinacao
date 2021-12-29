import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Cadastro() {

    const [primeiroNome, setPrimeiroNome] = useState(" ");
    const [ultimoNome, setUltimoNome] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [senha, setSenha] = useState(" ");

    return (
        <div className='card-cadastro'>
            <h1>Cadastre-se</h1>

            <label htmlFor='nome'>Primeiro nome:</label>
            <input type="text" value={primeiroNome} onChange={e=> setPrimeiroNome(e.target.value)} />

            <label htmlFor='nome'>Ultimo nome:</label>
            <input type="text" value={ultimoNome} onChange={e=> setUltimoNome(e.target.value)} />

            <label htmlFor='nome'>E-mail:</label>
            <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />

            <label htmlFor='nome'>Senha:</label>
            <input type="text" value={senha} onChange={e=> setSenha(e.target.value)} />

            <button>Cadastrar</button>

            <span>Já possui cadastro?</span>
            <Link to="/login">Faça Login</Link>

        </div>
    );
}

export default Cadastro;