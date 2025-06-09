import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import { Facebook, Instagram } from 'react-bootstrap-icons';

function PiePagina() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <Nav className="mb-3 mb-md-0">
          <Nav.Link as={Link} to="/contacto" className="text-white px-2">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/privacidad" className="text-white px-2">
            Política de privacidad
          </Nav.Link>
          <Nav.Link as={Link} to="/cookies" className="text-white px-2">
            Cookies
          </Nav.Link>
        </Nav>
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white mx-2"
            style={{ fontSize: '1.5rem', transition: 'color 0.3s' }}
          >
            <Facebook />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="text-white mx-2 pb-1"
            style={{ fontSize: '1.5rem', transition: 'color 0.3s',display: 'inline-block', verticalAlign: 'middle' }}
          >
            <i className='bi bi-twitter-x'></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white mx-2"
            style={{ fontSize: '1.5rem', transition: 'color 0.3s' }}
          >
            <Instagram />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default PiePagina;
