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

    if (textoTarea === "") {
        return;
    }

    // Crear el elemento de la tarea
    const elementoTarea = document.createElement("li");

    // Crear el texto de la tarea
    const texto = document.createElement("span");
    texto.textContent = textoTarea;

    // Crear el botón para marcar como completada
    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    botonCompletar.addEventListener("click", function() {
        texto.style.textDecoration = "line-through";
        texto.style.color = "#666666";
    });

    // Crear el botón para eliminar elemento de la lista
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        elementoTarea.remove();
    });

    // Agregar los elementos a la tarea
    elementoTarea.appendChild(texto);
    elementoTarea.appendChild(botonCompletar);
    elementoTarea.appendChild(botonEliminar);

    // Agregar la tarea a la lista
    listaTareas.appendChild(elementoTarea);

    // Limpiar el campo de texto
    entradaTarea.value = "";
});