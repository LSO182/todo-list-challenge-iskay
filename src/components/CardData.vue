<template>
  <form class="bg-white d-flex flex-column custom-shadow card-data px-3">
    <div class="mb-4">
      <label
        for="my-data-name"
        class="form-label text-small text-grey-neutral-60"
        >Nombre <span class="text-danger">*</span></label
      >
      <input
        type="text"
        class="form-control custom-placeholder"
        id="my-data-name"
        placeholder="Nombre"
      />
    </div>
    <div class="mb-4">
      <label
        for="my-data-email"
        class="form-label text-small text-grey-neutral-60"
        >Email <span class="text-danger">*</span></label
      >
      <input
        type="email"
        class="form-control custom-placeholder"
        id="my-data-email"
        placeholder="Email"
      />
    </div>
    <div class="mb-40">
      <label
        for="my-data-phone"
        class="form-label text-small text-grey-neutral-60"
        >Teléfono <span class="text-danger">*</span></label
      >
      <input
        type="text"
        class="form-control custom-placeholder"
        id="my-data-phone"
        placeholder="Teléfono"
      />
    </div>
    <button class="btn btn-primary">Guardar</button>
  </form>
</template>

<script setup>
defineOptions({ name: "CardData" });
</script>

<style scoped>
.card-data {
  border-radius: 4px;
  padding-top: 28px;
  padding-bottom: 36px;
}
</style>
