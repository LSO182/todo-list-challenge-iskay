<template>
  <h1
    class="title-custom-padding fs-4-custom text-grey-neutral-60 fw-bold mb-0"
  >
    Mis tareas
  </h1>

  <div class="d-flex flex-column">
    <div
      class="spinner-border text-center d-flex mx-auto text-grey-neutral-40"
      role="status"
      v-if="isLoading"
    ></div>

    <div v-else>
      <TaskCard
        v-for="task in paginatedTasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
      />
      <div class="d-flex justify-content-center mt-3">
        <button
          class="btn btn-outline-secondary me-2"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Anterior
        </button>
        <span class="align-self-center">
          {{ currentPage }} / {{ totalPages }}</span
        >
        <button
          class="btn btn-outline-secondary ms-2"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Siguiente
        </button>
      </div>
    </div>

    <AddTaskModal @add-task="handleAddTask" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import TaskCard from "../components/TaskCard.vue";
import AddTaskModal from "../components/AddTaskModal.vue";

const tasksList = ref([]);
const isLoading = ref(true);

const currentPage = ref(1);
const tasksCardsPerPage = 3;

onMounted(async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    );
    if (!response.ok) throw new Error("error al cargar las tareas");
    tasksList.value = await response.json();
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
  }
});

function deleteTask(id) {
  tasksList.value = tasksList.value.filter((task) => task.id !== id);
  if (paginatedTasks.value.length === 0 && currentPage.value > 1) {
    currentPage.value--;
  }
}

function handleAddTask(task) {
  const randomId = Math.ceil(Math.random() * 10000);
  tasksList.value.unshift({
    id: randomId,
    title: task.name,
    description: task.description,
    completed: false,
  });
  currentPage.value = 1;
}

const totalPages = computed(() =>
  Math.ceil(tasksList.value.length / tasksCardsPerPage)
);

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * tasksCardsPerPage;
  const end = start + tasksCardsPerPage;
  return tasksList.value.slice(start, end);
});
</script>
