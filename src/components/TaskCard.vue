<template>
  <div
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
      @click="$emit('delete-task', task.id)"
    />
  </div>
</template>

<script setup>
defineOptions({ name: "TaskCard" });

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.task-card {
  border-radius: 4px;
}
</style>
