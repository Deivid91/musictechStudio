/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const SelectorPlantilla = ({ plantillas, plantillaSeleccionada, onSelect }) => {
    return (
        <Row className="g-3">
            {plantillas.map((plantilla) => (
                <Col key={plantilla.id} xs={12}>
                    <Card
                        onClick={() => onSelect(plantilla)}
                        className={`template-card ${plantillaSeleccionada?.id === plantilla.id ? 'selected' : ''}`}
                        role="button"
                        aria-label={`Seleccionar plantilla ${plantilla.nombre}`}
                    >
                        <div className="template-image-container">
                            <Card.Img
                                variant="top"
                                src={`/templates/${plantilla.imagen}`}
                                alt={`Vista previa de ${plantilla.nombre}`}
                            />
                            {plantillaSeleccionada?.id === plantilla.id && (
                                <div className="selected-badge">
                                    <CheckCircleFill className="text-success" size={24} />
                                </div>
                            )}
                        </div>
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0">{plantilla.nombre}</h6>
                                <Badge bg="light" text="dark" className="text-uppercase">
                                    {plantilla.elementos.length} elementos
                                </Badge>
                            </div>
                            <div className="mt-2">
                                <small className="text-muted">
                                    Haz clic para seleccionar
                                </small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default React.memo(SelectorPlantilla);