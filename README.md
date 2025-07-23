# Proyecto de Gestión de Tareas

## Descripción

Aplicación web para la gestión de tareas donde el usuario puede crear, visualizar y eliminar tareas. La interfaz utiliza Vue 3 y Bootstrap para una experiencia responsiva y amigable.

## Tecnologías utilizadas

- Vue 3 (Composition API)
- Bootstrap 5
- JavaScript (ES6+)
- Vite (como herramienta de build)
- Vue Router

## Funcionalidades

- Añadir nuevas tareas con título y descripción.
- Consumir tareas del endpoint proporcionado y mostrarlas
- Visualizar tareas con estado (completa o pendiente).
- Eliminar tareas individuales.
- Modal para creación de tareas con validaciones básicas.
- Indicadores visuales para estados de carga.
- Guardar tareas en sessionStorage para no perder los cambios mientras tengamos sesióm

## Instalación y ejecución

1. Clonar el repositorio:
   git clone https://github.com/LSO182/todo-list-challenge-iskay
   cd tu-repositorio
   npm install
   npm run dev
## Requisitos

- Node.js v20 (se recomienda usar nvm para gestionar versiones)

Para cambiar a la versión correcta:

nvm use 20