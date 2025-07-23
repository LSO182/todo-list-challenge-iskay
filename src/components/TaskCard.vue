<template>
  <div
    class="bg-white task-card custom-shadow p-3 d-flex align-items-center justify-content-between mb-3"
    :id="task.id"
  >
    <div class="description">
      <p class="mb-0 text-grey-neutral-60 fw-semibold">{{ task.title }}</p>
      <p class="mb-0 text-grey-neutral-60 text-small" v-if="task.description">
        {{ task.description }}
      </p>
      <p class="mb-0 text-extra-small text-grey-neutral-40">
        Estado:
        <span :class="task.completed ? 'text-success' : 'text-danger'">
          {{ task.completed ? "Completa" : "Pendiente" }}
        </span>
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
.modal-content {
  border-radius: 5px;
}
.description {
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: calc(100% - 40px);
}
</style>
