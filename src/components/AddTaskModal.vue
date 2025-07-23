<template>
  <div
    class="modal fade"
    id="taskModal"
    tabindex="-1"
    aria-labelledby="taskModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog d-flex mx-auto">
      <div class="modal-content">
        <div class="modal-header">
          <h2
            class="modal-title fs-5 text-grey-neutral-80 fw-bold"
            id="taskModalLabel"
          >
            Añadir tarea
          </h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-4">
            <label
              for="task-name"
              class="form-label text-small text-grey-neutral-60"
              >Nombre <span class="text-danger">*</span></label
            >
            <input
              v-model="name"
              type="text"
              class="form-control custom-placeholder"
              id="task-name"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-0">
            <label
              for="task-description"
              class="form-label text-small text-grey-neutral-60"
              >Descripción <span class="text-danger">*</span></label
            >
            <textarea
              v-model="description"
              class="form-control custom-placeholder"
              placeholder="Descripción"
              id="task-description"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer pb-4 pt-1 justify-content-between">
          <button
            type="button"
            class="btn btn-link-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-primary" @click="submitTask">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>

  <button
    class="btn btn-primary mt-5"
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#taskModal"
  >
    Añadir tarea
  </button>
</template>

<script setup>
import { ref } from "vue";

import { Modal } from "bootstrap";

defineOptions({ name: "AddTaskModal" });

const emit = defineEmits(["add-task"]);

const name = ref("");
const description = ref("");

function submitTask() {
  emit("add-task", {
    name: name.value,
    description: description.value,
  });

  name.value = "";
  description.value = "";

  document.activeElement?.blur();

  const modalEl = document.getElementById("taskModal");
  if (modalEl) {
    const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
    modalInstance.hide();
  }

  setTimeout(() => {
    document.body.classList.remove("modal-open");
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((bd) => bd.remove());
  }, 300);
}
</script>

<style scope>
.btn-primary,
.btn-link-secondary {
  min-width: 163px;
}

.modal-dialog {
  width: 380px;
}

.modal-footer {
  border-top: none;
}

.modal-header {
  border-bottom: none;
}
</style>
