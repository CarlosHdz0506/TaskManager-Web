# TaskManager Web

## 1. Descripción del proyecto

TaskManager Web es una aplicación web diseñada para facilitar la administración de tareas pendientes mediante una interfaz sencilla e intuitiva. Su propósito es permitir que los usuarios registren sus actividades, consulten las tareas agregadas, marquen las que han sido completadas, regresen tareas al estado pendiente y eliminen aquellas que ya no necesitan.

El proyecto se desarrolla utilizando HTML, CSS y JavaScript, aplicando un flujo de trabajo colaborativo con Git y GitHub.

## 2. Objetivo

Desarrollar una aplicación web funcional que permita organizar y administrar tareas de manera sencilla, al mismo tiempo que se ponen en práctica los conocimientos de control de versiones y desarrollo colaborativo mediante GitHub Flow.

## 3. Integrantes y responsabilidades

- **Juan Carlos Hernández Sánchez:** desarrollo de la estructura HTML, mejoras de accesibilidad, revisión de cambios y pruebas de funcionamiento.
- **Jorge Alemán Cabrales:** implementación de los estilos CSS, programación de las funcionalidades JavaScript y mejora para alternar el estado de las tareas.

Ambos integrantes participaron en la revisión de Pull Requests, integración de cambios, resolución de conflictos y sincronización de los repositorios.

## 4. Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **CSS3:** diseño y adaptación de la interfaz a diferentes dispositivos.
- **JavaScript:** administración e interacción con las tareas.
- **Git:** control de versiones del proyecto.
- **GitHub:** alojamiento del repositorio y colaboración entre los integrantes.

## 5. Instrucciones de ejecución

Para ejecutar el proyecto de manera local, se deben seguir los siguientes pasos:

### 5.1. Clonar el repositorio

```bash
git clone https://github.com/CarlosHdz0506/TaskManager-Web.git
```

### 5.2. Ingresar a la carpeta del proyecto

```bash
cd TaskManager-Web
```

### 5.3. Abrir la aplicación

Abrir el archivo `index.html` en un navegador web.

No se requiere instalar dependencias adicionales para ejecutar la aplicación.

## 6. Funciones de la aplicación

La aplicación contempla las siguientes funciones:

- **Agregar tareas:** registrar nuevas actividades mediante un formulario.
- **Mostrar tareas:** visualizar las actividades registradas en una lista.
- **Validar campos vacíos:** impedir el registro de tareas sin contenido.
- **Completar tareas:** cambiar el estado de una actividad para identificarla como terminada.
- **Desmarcar tareas:** regresar una actividad completada al estado pendiente.
- **Eliminar tareas:** quitar actividades de la lista cuando ya no sean necesarias.
- **Diseño responsivo:** adaptar la interfaz a diferentes tamaños de pantalla.

## 7. Organización del desarrollo

El proyecto se desarrolló mediante GitHub Flow, utilizando ramas independientes para organizar las funcionalidades:

- `feature/interfaz`: desarrollo de la estructura HTML.
- `feature/estilos`: implementación del diseño y los estilos CSS.
- `feature/tareas`: programación de las funciones JavaScript.
- `mejora/alternar-tareas`: modificación para permitir alternar entre los estados pendiente y completado.
- `conflicto-a` y `conflicto-b`: ramas utilizadas para realizar una prueba controlada de conflictos.

Los cambios se integraron a la rama principal `main` mediante Pull Requests, permitiendo la revisión del código entre los integrantes antes de su incorporación.

## 8. Comandos de Git utilizados

Durante el desarrollo colaborativo se utilizaron los siguientes comandos:

| Comando | Descripción |
|---|---|
| `git clone` | Clonar el repositorio remoto. |
| `git init` | Inicializar un repositorio local. |
| `git branch` | Consultar las ramas disponibles. |
| `git switch -c` | Crear y cambiar a una nueva rama. |
| `git checkout` | Cambiar de rama. |
| `git add` | Agregar archivos al área de preparación. |
| `git commit` | Registrar los cambios realizados. |
| `git push` | Publicar los cambios en GitHub. |
| `git pull` | Descargar e integrar los cambios remotos. |
| `git fetch` | Obtener información de las ramas remotas. |
| `git merge` | Integrar los cambios de otra rama. |
| `git status` | Consultar el estado del repositorio. |
| `git diff` | Revisar las modificaciones realizadas. |
| `git log --oneline --graph --all` | Consultar el historial de commits y las ramas. |

## 9. Repositorio del proyecto

**GitHub:** https://github.com/CarlosHdz0506/TaskManager-Web