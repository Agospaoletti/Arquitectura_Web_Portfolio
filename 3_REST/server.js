// UBICACIÓN: /3_REST/server.js
const express = require('express');
const taskController = require('./api/taskController');

const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// Definición de Rutas (Endpoints)
app.get('/tasks', (req, res) => taskController.getTasks(req, res));
app.post('/tasks', (req, res) => taskController.createTask(req, res));
app.put('/tasks/:id/complete', (req, res) => taskController.completeTask(req, res));

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor REST corriendo en http://localhost:${PORT}`);
    console.log("Prueba GET: http://localhost:3000/tasks");
});