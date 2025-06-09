import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuNavegacion from './components/MenuNavegacion';
import BarraLateral from './components/BarraLateral';
import PiePagina from './components/PiePagina';
import PaginaInicio from './pages/PaginaInicio';
import PaginaPerfil from './pages/PaginaPerfil';
import PaginaPanelAdmin from './pages/PaginaPanelAdmin';
import PaginaEditorWeb from './pages/PaginaEditorWeb';


function App() {

  const userRole = 'user'; // 'guest', 'user' o 'admin'

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <MenuNavegacion
          role={userRole}
          />
        <div className="d-flex flex-grow-1">
          {(userRole === 'user' || userRole === 'admin') && (
            <BarraLateral role={userRole} />
          )}
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<PaginaInicio userRole={userRole} />} />
              <Route path="/perfil" element={<PaginaPerfil />} />
              <Route path="/admin" element={<PaginaPanelAdmin />} />
              <Route path="/editor" element={<PaginaEditorWeb />} />
            </Routes>
          </main>
        </div>
        <PiePagina />
      </Router>
    </div>
  );
}

export default App;