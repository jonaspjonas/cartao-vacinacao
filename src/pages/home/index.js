import './style.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Cartao de vacinaçao</h1>
            <h2>Usuarios</h2>
            
                <div className='lista-usuarios'>
                    <div>
                        <ul>Nome</ul>
                        <li>Paciente 1</li>
                        <li>Paciente 2</li>
                    </div>
                    <div>
                        <ul>Data de nascimento</ul>
                        <li>15/05/2000</li>
                    </div>
                    <div>
                        <ul>Cartao SUS</ul>
                        <li>700235698745125</li>
                    </div>
                    <div>
                        <ul>Telefone</ul>
                        <li>(91)99564-5781</li>
                    </div>

            </div>
        </div>
    );
}

export default Home;