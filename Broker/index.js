const express = require('express');
const axios = require('axios'); // Para redirigir peticiones HTTP
require('dotenv').config(); // Para manejar variables de entorno

const app = express();
app.use(express.json());

// Configurar los backends a donde se enviarán las peticiones
const BACKEND_MESA_AYUDA = process.env.BACKEND_MESA_AYUDA || "http://localhost:5001";
const BACKEND_INVENTARIO = process.env.BACKEND_INVENTARIO || "http://localhost:5002";

// Middleware para decidir a dónde enviar las solicitudes
app.use('/api/mesa-ayuda', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${BACKEND_MESA_AYUDA}${req.originalUrl}`,
            data: req.body
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: "Error en el Broker", details: error.message });
    }
});

app.use('/api/inventario', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${BACKEND_INVENTARIO}${req.originalUrl}`,
            data: req.body
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: "Error en el Broker", details: error.message });
    }
});

// Iniciar el Broker en el puerto 5000
const PORT = process.env.BROKER_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Broker corriendo en http://localhost:${PORT}`);
});
