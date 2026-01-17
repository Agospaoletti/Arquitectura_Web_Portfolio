// UBICACIÓN: /4_Microservicios/audit-service/index.js
const express = require('express');
const app = express();
const PORT = 3002; // PUERTO DIFERENTE

app.use(express.json());

// Base de datos de logs en memoria
const logs = [];

// Endpoint para recibir eventos
app.post('/logs', (req, res) => {
    const event = req.body;
    const logEntry = {
        timestamp: new Date(),
        service: 'Audit-Service',
        event: event
    };
    logs.push(logEntry);
    
    console.log(`[AUDIT SERVICE] Evento recibido: ${event.action} - ${event.details}`);
    res.status(201).json({ message: 'Log registrado' });
});

app.get('/logs', (req, res) => {
    res.json(logs);
});

app.listen(PORT, () => {
    console.log(`✅ Servicio de Auditoría corriendo en http://localhost:${PORT}`);
});