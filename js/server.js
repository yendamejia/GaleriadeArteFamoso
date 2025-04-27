const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Ruta para enviar el formulario
app.post('/enviar-formulario', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    console.log("Formulario recibido:", req.body);
    return res.status(200).json({ mensaje: 'Formulario recibido con éxito' });
});

// Servir tu HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre-nosotros.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});