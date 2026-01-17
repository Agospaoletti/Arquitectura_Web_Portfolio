// UBICACIÓN: /3_REST/datos/taskRepository.js
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
        // En REST los parámetros de URL suelen venir como texto, aseguramos conversión
        return this.tasks.find(t => t.id === parseInt(id));
    }

    update(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.tasks[index] = task;
            return true;
        }
        return false;
    }
}

module.exports = new TaskRepository(); // Exportamos una instancia (Singleton simple)