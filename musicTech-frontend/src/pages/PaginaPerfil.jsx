import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function PaginaPerfil() {
  // Simulación de datos de usuario, en un proyecto real vendrían de un contexto o API
  const usuario = {
    nombre: 'David Amorós Sánchez',
    email: 'david@example.com',
    rol: 'Músico registrado',
  };

  return (
    <Container className="my-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="mb-4 fs-3">Mi Perfil</Card.Title>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p className="mb-4"><strong>Rol:</strong> {usuario.rol}</p>
          <Button variant="primary" className="me-3">Editar Perfil</Button>
          <Button variant="secondary">Soporte</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PaginaPerfil;