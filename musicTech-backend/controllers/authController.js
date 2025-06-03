const { Request } = require('tedious');
const connection = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE email = '${email}'`;

    const request = new Request(query, (err, rowCount) => {
        if (err) return res.status(500).json({ error: 'Error en SQL Server' });
        if (rowCount === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    });

    request.on('row', columns => {
        const user = {};
        columns.forEach(column => {
            user[column.metadata.colName] = column.value;
        });

        // Verificar contraseña con bcrypt
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) return res.status(401).json({ error: 'Contraseña incorrecta' });

            // Generar token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });

    connection.execSql(request);
};

module.exports = { loginUser };