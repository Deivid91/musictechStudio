const { Connection } = require('tedious');
require('dotenv').config();

const config = {
  server: process.env.DB_SERVER,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    }
  },
  options: {
    database: process.env.DB_NAME,
    trustServerCertificate: true,
    port: 1433
  }
};

const connection = new Connection(config);

console.log("🚀 Iniciando conexión con SQL Server...");

// 🔹 Aquí llamamos explícitamente a `.connect()`
connection.connect();
console.log("🛠 Probando conexión...");

connection.on('connect', (err) => {
  if (err) {
    console.error('Error al conectar a SQL Server:', err);
  } else {
    console.log('✅ Conectado a SQL Server');
  }
});

connection.on('error', (err) => {
  console.error('Error de conexión:', err);
});

module.exports = connection;