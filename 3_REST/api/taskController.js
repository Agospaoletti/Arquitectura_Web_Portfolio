// UBICACIÓN: /3_REST/api/taskController.js
const taskService = require('../dominio/taskService');

class TaskController {
    // GET /tasks
    getTasks(req, res) {
        const tasks = taskService.listTasks();
        res.json(tasks); // Devuelve JSON automáticamente
    }

    // POST /tasks
    createTask(req, res) {
        try {
            // El dato viene en el cuerpo (body) de la petición
            const description = req.body.description; 
            const newTask = taskService.createTask(description);
            // 201 = Created
            res.status(201).json(newTask); 
        } catch (error) {
            // 400 = Bad Request (Error del cliente)
            res.status(400).json({ error: error.message });
        }
    }

    // PUT /tasks/:id/complete
    completeTask(req, res) {
        try {
            const id = req.params.id; // El ID viene en la URL
            const updatedTask = taskService.completeTask(id);
            res.json(updatedTask);
        } catch (error) {
            // 404 = Not Found
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new TaskController();