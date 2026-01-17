// UBICACIÓN: /4_Microservicios/task-service/index.js
const express = require('express');
const axios = require('axios'); // Librería para comunicar servicios
const app = express();
const PORT = 3001; // PUERTO DIFERENTE

app.use(express.json());

let tasks = [];
let currentId = 1;

// URL del otro microservicio
const AUDIT_SERVICE_URL = 'http://localhost:3002/logs';

app.post('/tasks', async (req, res) => {
    const { description } = req.body;
    
    if (!description) return res.status(400).json({ error: "Descripción requerida" });

    const newTask = { id: currentId++, description, completed: false };
    tasks.push(newTask);

    // COMUNICACIÓN ENTRE MICROSERVICIOS
    try {
        await axios.post(AUDIT_SERVICE_URL, {
            action: 'CREATE_TASK',
            details: `Se creó la tarea ID ${newTask.id}: ${description}`
        });
        console.log("[TASK SERVICE] Notificación enviada a Auditoría");
    } catch (error) {
        console.error("[TASK SERVICE] Error contactando a Auditoría:", error.message);
        // En microservicios, si falla el log, ¿debería fallar la tarea? 
        // Aquí decidimos que NO (tolerancia a fallos), la tarea se crea igual.
    }

    res.status(201).json(newTask);
});

app.get('/tasks', (req, res) => res.json(tasks));

app.listen(PORT, () => {
    console.log(`🚀 Servicio de Tareas corriendo en http://localhost:${PORT}`);
});