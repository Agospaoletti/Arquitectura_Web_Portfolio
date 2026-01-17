// UBICACIÓN: /3_REST/dominio/taskService.js
const taskRepository = require('../datos/taskRepository');

class TaskService {
    createTask(description) {
        if (!description) {
            throw new Error("La descripción es obligatoria.");
        }
        const newTask = { 
            description, 
            completed: false, 
            createdAt: new Date() 
        };
        return taskRepository.save(newTask);
    }

    listTasks() {
        return taskRepository.getAll();
    }

    completeTask(id) {
        const task = taskRepository.findById(id);
        if (!task) {
            throw new Error("Tarea no encontrada.");
        }
        task.completed = true;
        taskRepository.update(task);
        return task;
    }
}

module.exports = new TaskService();