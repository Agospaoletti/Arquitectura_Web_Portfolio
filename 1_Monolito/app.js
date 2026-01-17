// UBICACIÓN: /1_Monolito/app.js

class TaskMonolith {
    constructor() {
        // DATOS (Array en memoria)
        this.tasks = [];
        this.currentId = 1;
    }

    // LÓGICA + PRESENTACIÓN (Todo mezclado)
    addTask(description) {
        if (!description) {
            console.error("Error: La descripción no puede estar vacía.");
            return;
        }
        const newTask = {
            id: this.currentId++,
            description: description,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        console.log(`[EXITO] Tarea creada: "${newTask.description}"`);
    }

    listTasks() {
        console.log("\n--- LISTA DE TAREAS ---");
        this.tasks.forEach(task => {
            const status = task.completed ? "[X]" : "[ ]";
            console.log(`${status} ID: ${task.id} | ${task.description}`);
        });
        console.log("-----------------------\n");
    }
}

// EJECUCIÓN
const app = new TaskMonolith();
app.addTask("Aprender Arquitectura Monolítica");
app.addTask("Configurar Git paso a paso");
app.listTasks();
