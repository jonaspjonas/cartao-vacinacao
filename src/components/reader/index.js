import './style.css';
import imgCoracao from '../../assets/coracao-saude.png';
import imgUser from '../../assets/user.png';

function Reader() {
    return (
        <nav>
            <img src={imgCoracao} alt="saude" />
            <h1>Cartão de Vacinação</h1>
            <img src={imgUser} alt="user"/>
        </nav>
    );
}

export default Reader;