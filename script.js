// Funciones de TaskManager Web
// Funciones de TaskManager Web

// Obtener los elementos del HTML
const formulario = document.getElementById("formulario-tarea");
const entradaTarea = document.getElementById("entrada-tarea");
const listaTareas = document.getElementById("lista-tareas");

// Agregar una nueva tarea
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener el texto de la tarea
    const textoTarea = entradaTarea.value.trim();

    // Crear un elemento para mostrar la tarea
    const elementoTarea = document.createElement("li");
    elementoTarea.textContent = textoTarea;

    // Agregar la tarea a la lista
    listaTareas.appendChild(elementoTarea);

    // Limpiar el campo de texto
    entradaTarea.value = "";
});