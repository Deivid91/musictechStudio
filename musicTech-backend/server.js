// Punto de entrada

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./config/db');  // Conexión a SQL Server

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta raíz para pruebas
app.get('/', (req, res) => {
    res.send('🎸 ¡Hola desde el backend!');
});

// Rutas reales
app.use('/api/auth', require('./routes/authRoutes'));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend en http://localhost:${PORT}`);
});