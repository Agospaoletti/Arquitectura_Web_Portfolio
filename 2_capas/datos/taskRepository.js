// UBICACIÓN: /2_capas/datos/taskRepository.js

class TaskRepository {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    save(task) {
        task.id = this.currentId++;
        this.tasks.push(task);
        return task;
    }

    getAll() {
        return this.tasks;
    }

    findById(id) {
        return this.tasks.find(t => t.id === id);
    }

    update(updatedTask) {
        const index = this.tasks.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
            return true;
        }
        return false;
    }
}

module.exports = TaskRepository;