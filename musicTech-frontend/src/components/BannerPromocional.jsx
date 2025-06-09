import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MusicNoteBeamed, PencilSquare, ArrowRight } from 'react-bootstrap-icons';

function BannerPromocional({isAdmin}) {
    return (
        <div
            className="py-5 text-white"
            style={{
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                borderRadius: '0 0 20px 20px',
                marginBottom: '40px'
            }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={8} className="fade-in-left">
                        <div className="d-flex align-items-center mb-3">
                            <MusicNoteBeamed size={32} className="me-3" />
                            <h2 className="mb-0" style={{ fontSize: '2rem', fontWeight: '700' }}>
                                Crea tu web musical <span className="text-warning">en minutos</span>
                            </h2>
                        </div>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Plantillas profesionales + herramientas especializadas para artistas.
                            <br />
                            <strong>Oferta de lanzamiento:</strong> 30% de descuento el primer mes.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end fade-in-right">
                        {isAdmin ? (
                            <Button
                                variant="outline-light"
                                size="lg"
                                className="fw-bold px-4"
                                style={{ borderRadius: '50px' }}
                            >
                                <PencilSquare className="me-2" />
                                Editar Banner
                            </Button>
                        ) : (
                            <Button
                                variant="warning"
                                size="lg"
                                className="fw-bold px-4 py-3"
                                style={{
                                    borderRadius: '50px',
                                    boxShadow: '0 4px 15px rgba(255,193,7,0.4)'
                                }}
                            >
                                Ver Demos <ArrowRight className="ms-2" />
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

BannerPromocional.propTypes = {
  isAdmin: PropTypes.bool.isRequired
};

export default BannerPromocional;