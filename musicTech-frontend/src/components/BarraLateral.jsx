import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { People, LayoutTextSidebar, LifePreserver, Palette, Bullseye, WrenchAdjustable } from 'react-bootstrap-icons';

function BarraLateral({ role }) {
  return (
    <div className="bg-light border-end p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="fw-bold mb-4">Panel de control</h5>
      
      <Nav className="flex-column">
        {role === 'user' && (
          <>
            <div className="text-muted small mb-2">Usuario</div>
            <Nav.Link as={Link} to="/editor"><LayoutTextSidebar className="me-2" />Constructor de webs</Nav.Link>
            <Nav.Link as={Link} to="/soporte"><LifePreserver className="me-2" />Soporte</Nav.Link>
          </>
        )}
        {role === 'admin' && (
          <>
            <div className="text-muted small mt-4 mb-2">Administración</div>
            <Nav.Link as={Link} to="/admin/usuarios"><People className="me-2" />Gestión de Usuarios</Nav.Link>
            <Nav.Link as={Link} to="/admin/plantillas"><Palette className="me-2" />Gestión de Plantillas</Nav.Link>
            <Nav.Link as={Link} to="/admin/promos"><Bullseye className="me-2" />Gestión de Promociones</Nav.Link>
            <Nav.Link as={Link} to="/admin"><WrenchAdjustable className="me-2" />Mi Panel de Administración</Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
}

BarraLateral.propTypes = {
  role: PropTypes.string.isRequired,
};

export default BarraLateral;