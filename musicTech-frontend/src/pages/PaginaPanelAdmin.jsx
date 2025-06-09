import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

const usuariosEjemplo = [
  { id: 1, nombre: 'Ana Pérez', email: 'ana@mail.com', rol: 'Usuario' },
  { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', rol: 'Administrador' },
  { id: 3, nombre: 'Laura Gómez', email: 'laura@mail.com', rol: 'Usuario' },
];

function PaginaPanelAdmin() {
  return (
    <Container>
      <h1 className="mb-4">Panel de Administrador</h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Usuarios registrados</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>
                {usuariosEjemplo.length}
              </Card.Text>
              <Button variant="primary">Gestionar usuarios</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Plantillas</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>
                5
              </Card.Text>
              <Button variant="primary">Editar plantillas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Promociones activas</Card.Title>
              <Card.Text style={{ fontSize: '2rem', fontWeight: '700' }}>
                2
              </Card.Text>
              <Button variant="primary">Ver promociones</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mb-3">Listado de usuarios</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosEjemplo.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>
                <Button size="sm" variant="warning" className="me-2">
                  Editar
                </Button>
                <Button size="sm" variant="danger">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PaginaPanelAdmin;