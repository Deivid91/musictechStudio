import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container, Button, Form, Badge } from 'react-bootstrap';
import logo from '../assets/images/LogoMusicTechFondoTransp.png';

function MenuNavegacion({ role }) {


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="px-4 d-flex align-items-center justify-content-between">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="MusicTech Studio" width="75" className="me-2" />
          <span className="fw-bold text-white">MusicTech Studio</span>
        </Navbar.Brand>
        
          <Form className="d-none d-xl-flex mx-1 flex-grow-1">
            <Form.Control type="search" placeholder="Buscar..." className="me-2 sm" style={{ width: "400px" }} />
          </Form>

        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
      </Container>

      <Navbar.Collapse id="basic-navbar-nav" className="px-4">
        <Nav className="ms-auto align-items-center">
          {role === 'guest' && (
            <>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/demos">Demos</Nav.Link>
              <Nav.Link as={Link} to="/planes">Planes</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Button variant="primary" className="ms-2">Registro</Button>
            </>
          )}
          {role === 'user' && (
            <>
              <Nav.Link as={Link} to="/panel" className='text-nowrap'>Mi sitio</Nav.Link>
              <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
              <Nav.Link as={Link} to="/soporte">Soporte</Nav.Link>
              <Nav.Link disabled>🔔</Nav.Link>
              <Badge bg="secondary" className="mx-2">Usuario</Badge>
              <Button variant="danger" className="ms-2">Cerrar sesión</Button>
            </>
          )}
          {role === 'admin' && (
            <>
              <Nav.Link as={Link} to="/admin/usuarios">Gestión de Usuarios</Nav.Link>
              <Nav.Link as={Link} to="/admin/plantillas">Gestión de Plantillas</Nav.Link>
              <Nav.Link as={Link} to="/admin/promos">Gestión de Promociones</Nav.Link>
              <Nav.Link as={Link} to="/admin"><Badge bg="warning" text="dark" className="mx-2">Admin</Badge></Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

MenuNavegacion.propTypes = {
  role: PropTypes.string.isRequired,
};

export default MenuNavegacion;