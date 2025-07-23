<template>
  <h1 class="title-custom-padding fs-4-custom text-grey-neutral-60 fw-bold mb-0">
    Mis tareas
  </h1>

  <div
    v-for="task in tasksList"
    :key="task.id"
    class="bg-white task-card custom-shadow p-3 d-flex align-items-center justify-content-between mb-3"
  >
    <div class="description">
      <p class="mb-0 text-grey-neutral-60 fw-semibold">{{ task.title }}</p>
      <p class="mb-0 text-extra-small text-grey-neutral-40">
        Estado: {{ task.completed ? 'Completa' : 'Pendiente' }}
      </p>
    </div>
    <img
      src="/src/assets/icon-trash.png"
      alt="Garbage can icon"
      @click="deleteTask(task.id)"
    />
  </div>
</template>

<script setup>
defineOptions({ name: "MyTask" });
import { ref, onMounted } from "vue";

const tasksList = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );
    if (!response.ok) throw new Error("error al cargar las tareas");
    tasksList.value = await response.json();
    console.log(tasksList)
  } catch (error) {
    console.error(error);
  }
});

function deleteTask(id) {
  tasksList.value = tasksList.value.filter((task) => task.id !== id);
}
</script>

<style scoped>
.task-card {
  border-radius: 4px;
}
</style>
