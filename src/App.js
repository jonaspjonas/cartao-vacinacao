import Login from './pages/login';
import Cadastro from './pages/cadastro';

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
    </Routes>
  );
}

export default App;
