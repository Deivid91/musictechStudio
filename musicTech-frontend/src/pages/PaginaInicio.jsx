import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import BannerPromocional from '../components/BannerPromocional';

function PaginaInicio({userRole}) {

  return (
    <>
    <Container className="text-center py-5">
      <h1 className="mb-4 display-4 fw-bold">Bienvenido a MusicTech Studio</h1>
      <p className="mb-4 lead mx-auto" style={{ maxWidth: '600px' }}>
        La plataforma SaaS diseñada para músicos. Crea tu sitio web personalizado, gestiona tus productos y conecta con tus fans fácilmente.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Button as={Link} to="/demos" variant="primary">
          Ver Demos
        </Button>
        <Button as={Link} to="/planes" variant="success">
          Ver Planes
        </Button>
        <Button as={Link} to="/registro" className='btnColor'>
          Registrarse
        </Button>
      </div>
    </Container>
    <BannerPromocional isAdmin={userRole === 'admin'}/>
    </>
  );
}

PaginaInicio.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default PaginaInicio;