// UBICACIÓN: /2_capas/presentacion/taskController.js
const TaskService = require('../dominio/taskService');

// Instanciamos el servicio (lógica)
const taskService = new TaskService();

function run() {
    console.log("--- INICIANDO SISTEMA EN 3 CAPAS ---");

    try {
        // 1. Crear tareas
        console.log("Creando tarea: 'Aprender Capas'");
        const t1 = taskService.createTask("Aprender Capas");
        
        console.log("Creando tarea: 'Separar responsabilidades'");
        const t2 = taskService.createTask("Separar responsabilidades");

        // 2. Listar
        console.log("\n--- LISTA DE TAREAS ---");
        const tasks = taskService.listTasks();
        tasks.forEach(t => {
            console.log(`ID: ${t.id} | ${t.description} [${t.completed ? 'X' : ' '}]`);
        });

        // 3. Completar tarea
        console.log("\nCompletando tarea 1...");
        taskService.completeTask(1);
        console.log("Tarea 1 completada.");

    } catch (error) {
        console.error(`[ERROR UI]: ${error.message}`);
    }
}

run();