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
        <form
          @submit.prevent="submitTask"
          ref="addTaskForm"
          :class="{ 'was-validated': wasValidated }"
          novalidate
        >
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
              @click="resetFormTaskValues"
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
                required
                maxlength="30"
              />
              <div class="text-extra-small d-block text-end">{{ name.length }}/30</div>
              <div class="invalid-feedback">La tarea debe tener un nombre.</div>
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
                required
                maxlength="100"
              ></textarea>
               <div class="text-extra-small d-block text-end">{{ description.length }}/100</div>
              <div class="invalid-feedback">
                La tarea debe contar con una descripción.
              </div>
            </div>
          </div>
          <div class="modal-footer pb-4 pt-1 justify-content-between">
            <button
              type="button"
              class="btn btn-link-secondary"
              data-bs-dismiss="modal"
              @click="resetFormTaskValues"
            >
              Cancelar
            </button>
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </form>
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

const wasValidated = ref(false);
const addTaskForm = ref(null);

const name = ref("");
const description = ref("");

function submitTask() {
  const form = addTaskForm.value;
  wasValidated.value = true;

  if (!form || !form.checkValidity()) {
    return;
  }

  emit("add-task", {
    name: name.value,
    description: description.value,
  });

  name.value = "";
  description.value = "";
  wasValidated.value = false;
  form.classList.remove("was-validated");
}

function resetFormTaskValues() {
  name.value = "";
  description.value = "";
  wasValidated.value = false;

  if (addTaskForm.value) {
    addTaskForm.value.classList.remove("was-validated");
  }
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
