// UBICACIÓN: /2_capas/dominio/taskService.js
const TaskRepository = require('../datos/taskRepository');

class TaskService {
    constructor() {
        // Aquí se inyecta la dependencia de datos
        this.taskRepository = new TaskRepository();
    }

    createTask(description) {
        // REGLA DE NEGOCIO: Validación
        if (!description) {
            throw new Error("La descripción no puede estar vacía.");
        }
        
        const newTask = {
            description: description,
            completed: false,
            createdAt: new Date()
        };

        return this.taskRepository.save(newTask);
    }

    listTasks() {
        return this.taskRepository.getAll();
    }

    completeTask(id) {
        const task = this.taskRepository.findById(id);
        // REGLA DE NEGOCIO: Verificar existencia
        if (!task) {
            throw new Error(`La tarea con ID ${id} no existe.`);
        }
        task.completed = true;
        this.taskRepository.update(task);
        return task;
    }
}

module.exports = TaskService;