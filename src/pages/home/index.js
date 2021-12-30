import './style.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Cartão de vacinação</h1>
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
                        <li>22/08/1978</li>
                    </div>
                    <div>
                        <ul>Cartão SUS</ul>
                        <li>700235698745125</li>
                        <li>999998888888554</li>
                    </div>
                    <div>
                        <ul>Telefone</ul>
                        <li>(91)99564-5781</li>
                        <li>(91)99564-5781</li>
                    </div>
                    <div>
                        <ul>Opções</ul>
                        <li><img src="" alt="Vacinar"/><img src="" alt="Editar"/><img src="" alt="Excluir"/></li>
                        <li><img src="" alt="Vacinar"/><img src="" alt="Editar"/><img src="" alt="Excluir"/></li>
                    </div>

            </div>
        </div>
    );
}

export default Home;