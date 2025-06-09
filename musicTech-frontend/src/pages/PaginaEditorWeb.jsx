/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Form, Tab, Tabs } from 'react-bootstrap';
import {
    PencilSquare,
    Image as ImageIcon,
    MusicNoteList,
    CalendarEvent,
    Trash,
    PersonLinesFill,
    CameraVideo,
    Images,
    Envelope
} from 'react-bootstrap-icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SelectorPlantilla from '../components/SelectorPlantilla';
import imagen1Banda from '../assets/images/imagenBandaEjemplo1.jpg';
import imagen2Banda from '../assets/images/imagenBandaEjemplo2.jpg';
import imagen3Banda from '../assets/images/imagenBandaEjemplo3.jpg';

const imagenesGaleria = [imagen1Banda, imagen2Banda, imagen3Banda];

// Tipos de elementos disponibles
const TIPOS_ELEMENTOS = [
    { tipo: 'texto', icono: <PencilSquare />, nombre: 'Texto' },
    { tipo: 'imagen', icono: <ImageIcon />, nombre: 'Imagen' },
    { tipo: 'reproductor', icono: <MusicNoteList />, nombre: 'Reproductor' },
    { tipo: 'eventos', icono: <CalendarEvent />, nombre: 'Eventos' },
    { tipo: 'bio', icono: <PersonLinesFill />, nombre: 'Biografía' },
    { tipo: 'video', icono: <CameraVideo />, nombre: 'Video' },
    { tipo: 'galeria', icono: <Images />, nombre: 'Galería' },
    { tipo: 'contacto', icono: <Envelope />, nombre: 'Contacto' }
];

// Componente de elemento arrastrable optimizado
const ElementoEditor = React.memo(({ tipo, onDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'elemento',
        item: { tipo },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const elemento = TIPOS_ELEMENTOS.find(e => e.tipo === tipo);

    return (
        <Card
            ref={drag}
            className={`mb-2 ${isDragging ? 'opacity-50' : 'opacity-100'} shadow-sm`}
        >
            <Card.Body className="d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                    <span className="text-primary me-2">{elemento.icono}</span>
                    <span>{elemento.nombre}</span>
                </div>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(tipo);
                    }}
                    aria-label={`Eliminar ${elemento.nombre}`}
                >
                    <Trash size={14} />
                </Button>
            </Card.Body>
        </Card>
    );
});

// Área de soltado optimizada
const AreaEdicion = React.memo(({ elementos, onDrop, estilos }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'elemento',
        drop: (item) => onDrop(item.tipo),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`border-2 ${isOver ? 'border-primary' : 'border-light'} p-4 rounded-3`}
            style={{
                minHeight: '500px',
                backgroundColor: isOver ? '#f8f9fa' : estilos.fondo,
                fontFamily: estilos.fuente,
                transition: 'background-color 0.3s ease'
            }}
        >
            {elementos.length === 0 ? (
                <div className="text-center text-muted py-5">
                    <div className="mb-3">
                        <ImageIcon size={48} className="opacity-25" />
                    </div>
                    <h5>Arrastra elementos aquí</h5>
                    <p className="small">Comienza construyendo tu página web</p>
                </div>
            ) : (
                <div style={{ fontSize: estilos.tamanio }}>
                    {elementos.map((elem, index) => (
                        <div key={`${elem}-${index}`} className="mb-3 p-3 border rounded bg-white shadow-sm">
                            {renderizarElemento(elem)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

// Renderizado de elementos optimizado
const renderizarElemento = (tipo) => {
    const elementos = {
        bio: <Form.Control as="textarea" rows={4} placeholder="Escribe tu biografía aquí..." />,
        video: (
            <div className="ratio ratio-16x9 bg-light">
                <div className="d-flex align-items-center justify-content-center">
                    <CameraVideo size={48} className="text-muted" />
                </div>
            </div>
        ),
        galeria: (
            <div className="d-flex gap-2 overflow-auto py-2">
                {imagenesGaleria.map((src, i) => (
                    <div key={i} className="border rounded p-1 bg-light">
                        <img
                            src={src}
                            alt={`Imagen ${i + 1}`}
                            className="rounded"
                            style={{ height: '100px' }}
                        />
                    </div>
                ))}
            </div>
        ),

        contacto: (
            <Form>
                <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                </Form.Group>
                <Button variant="primary" size="sm">Enviar</Button>
            </Form>
        ),
        texto: (
            <Form.Group>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu contenido aquí..." />
            </Form.Group>
        ),
        imagen: (
            <div className="text-center p-3 border bg-light rounded">
                <ImageIcon size={48} className="text-muted mb-2" />
                <p className="mb-0 small">Área para tu imagen</p>
            </div>
        ),
        reproductor: (
            <div className="text-center p-4 bg-light rounded">
                <MusicNoteList size={48} className="mb-3 text-primary" />
                <p>Reproductor de música integrado</p>
            </div>
        ),
        eventos: (
            <div className="text-center p-4 bg-light rounded">
                <CalendarEvent size={48} className="mb-3 text-success" />
                <p>Calendario de eventos</p>
            </div>
        )
    };

    return elementos[tipo] || null;
};

// Componente principal optimizado
const PaginaEditorWeb = () => {
    const [elementos, setElementos] = useState([]);
    const [plantillaSeleccionada, setPlantillaSeleccionada] = useState(null);
    const [activeTab, setActiveTab] = useState('editor');
    const [guardando, setGuardando] = useState(false);

    const [estilos, setEstilos] = useState({
        fondo: "#ffffff",
        fuente: "Arial",
        tamanio: "16px",
        alineacion: "left"
    });

    const plantillas = [
        {
            id: 1,
            nombre: "Plantilla Elegante",
            imagen: "plantillaElegante.jpg",
            elementos: ['bio', 'imagen', 'reproductor', 'eventos'],
            estilos: {
                fondo: "#f8f9fa",
                fuente: "'Roboto', sans-serif",
                tamanio: "16px"
            }
        },
        {
            id: 2,
            nombre: "Plantilla Moderna",
            imagen: "plantillaModerna.jpg",
            elementos: ['texto', 'galeria', 'video', 'contacto'],
            estilos: {
                fondo: "#ffffff",
                fuente: "'Arial', sans-serif",
                tamanio: "14px"
            }
        }
    ];

    const handleDrop = useCallback((tipo) => {
        setElementos(prev => [...prev, tipo]);
    }, []);

    const eliminarElemento = useCallback((index) => {
        setElementos(prev => prev.filter((_, i) => i !== index));
    }, []);

    const cargarPlantilla = useCallback((plantilla) => {
        setPlantillaSeleccionada(plantilla);
        setElementos(plantilla.elementos);
        setEstilos(prev => ({ ...prev, ...plantilla.estilos }));
    }, []);

    const guardarBorrador = async () => {
        setGuardando(true);
        // Simular guardado
        await new Promise(resolve => setTimeout(resolve, 1000));
        setGuardando(false);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Container fluid className="py-4 editor-container">
                <Row>
                    {/* Panel izquierdo */}
                    <Col md={3} className="pe-3">
                        <Card className="mb-4 shadow-sm">
                            <Card.Header className="bg-primary text-white">
                                <h5 className="mb-0">Elementos</h5>
                            </Card.Header>
                            <Card.Body className="p-2">
                                {TIPOS_ELEMENTOS.map((elem) => (
                                    <ElementoEditor
                                        key={elem.tipo}
                                        tipo={elem.tipo}
                                        onDelete={eliminarElemento}
                                    />
                                ))}
                            </Card.Body>
                        </Card>

                        <Card className="mb-4 shadow-sm">
                            <Card.Header className="bg-primary text-white">
                                <h5 className="mb-0">Plantillas</h5>
                            </Card.Header>
                            <Card.Body>
                                <SelectorPlantilla
                                    plantillas={plantillas}
                                    plantillaSeleccionada={plantillaSeleccionada}
                                    onSelect={cargarPlantilla}
                                />
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Header className="bg-primary text-white">
                                <h5 className="mb-0">Personalización</h5>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Color de fondo</Form.Label>
                                    <Form.Control
                                        type="color"
                                        value={estilos.fondo}
                                        onChange={(e) => setEstilos(prev => ({ ...prev, fondo: e.target.value }))}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Fuente</Form.Label>
                                    <Form.Select
                                        value={estilos.fuente}
                                        onChange={(e) => setEstilos(prev => ({ ...prev, fuente: e.target.value }))}
                                    >
                                        <option value="Arial">Arial</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="'Courier New', monospace">Courier New</option>
                                        <option value="'Roboto', sans-serif">Roboto</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tamaño del texto</Form.Label>
                                    <Form.Select
                                        value={estilos.tamanio}
                                        onChange={(e) => setEstilos(prev => ({ ...prev, tamanio: e.target.value }))}
                                    >
                                        <option value="14px">Pequeño (14px)</option>
                                        <option value="16px">Normal (16px)</option>
                                        <option value="18px">Grande (18px)</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Alineación</Form.Label>
                                    <Form.Select
                                        value={estilos.alineacion}
                                        onChange={(e) => setEstilos(prev => ({ ...prev, alineacion: e.target.value }))}
                                    >
                                        <option value="left">Izquierda</option>
                                        <option value="center">Centrada</option>
                                        <option value="right">Derecha</option>
                                        <option value="justify">Justificada</option>
                                    </Form.Select>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Área principal */}
                    <Col md={9}>
                        <Tabs
                            activeKey={activeTab}
                            onSelect={setActiveTab}
                            className="mb-3 editor-tabs"
                            variant="pills"
                        >
                            <Tab
                                eventKey="editor"
                                title={
                                    <>
                                        <PencilSquare className="me-1" /> Editor
                                    </>
                                }
                            >
                                <AreaEdicion
                                    elementos={elementos}
                                    onDrop={handleDrop}
                                    estilos={estilos}
                                />
                            </Tab>
                            <Tab
                                eventKey="preview"
                                title={
                                    <>
                                        <ImageIcon className="me-1" /> Vista Previa
                                    </>
                                }
                            >
                                <div className="preview-container">
                                    <div className="browser-bar mb-0">
                                        <div className="browser-dots">
                                            <span className="dot bg-danger"></span>
                                            <span className="dot bg-warning"></span>
                                            <span className="dot bg-success"></span>
                                        </div>
                                        <div className="browser-url">bandaX.musictech.com</div>
                                    </div>
                                    <div
                                        className="p-4 preview-content"
                                        style={{
                                            backgroundColor: estilos.fondo,
                                            fontFamily: estilos.fuente,
                                            fontSize: estilos.tamanio,
                                            textAlign: estilos.alineacion,
                                            minHeight: '500px'
                                        }}
                                    >
                                        {elementos.length > 0 ? (
                                            elementos.map((elem, index) => (
                                                <div key={index} className="mb-4">
                                                    {renderizarElemento(elem)}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center text-muted py-5">
                                                <ImageIcon size={48} className="opacity-25 mb-3" />
                                                <h5>No hay contenido para previsualizar</h5>
                                                <p>Selecciona una plantilla o añade elementos</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>

                        <div className="d-flex justify-content-between mt-3">
                            <Button
                                variant="outline-primary"
                                onClick={guardarBorrador}
                                disabled={guardando}
                            >
                                {guardando ? 'Guardando...' : 'Guardar Borrador'}
                            </Button>
                            <Button variant="success">
                                Publicar Cambios
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </DndProvider>
    );
};

export default PaginaEditorWeb;