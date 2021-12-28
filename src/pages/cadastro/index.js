import { useState } from 'react';
import './style.css';

function Cadastro() {

    const [
        primeiroNome,
        setPrimeiroNome,
        ultimoNome,
        setUltimoNome,
        email,
        setEmail,
        senha,
        setSenha
    ] = useState(" ");

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



        </div>
    );
}

export default Cadastro;