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
        v-for="task in tasksList"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
      />
    </div>

    <AddTaskModal @add-task="handleAddTask"/>
  </div>
</template>

<script setup>
defineOptions({ name: "MyTask" });
import { ref, onMounted } from "vue";

import TaskCard from "../components/TaskCard.vue";
import AddTaskModal from "../components/AddTaskModal.vue";

const tasksList = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
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
  isLoading.value = true;
  tasksList.value = tasksList.value.filter((task) => task.id !== id);
  isLoading.value = false;
}

function handleAddTask(task) {
  isLoading.value = true;
  const randomId = Math.ceil(Math.random() * 10000);
  tasksList.value.push({
    id: randomId,
    title: task.name,
    description: task.description,
    completed: false,
  });
  isLoading.value = false;
}
</script>
