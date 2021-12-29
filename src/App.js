import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Home from './pages/home';

import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
