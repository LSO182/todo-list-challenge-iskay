<template>
  <h1
    class="title-custom-padding fs-4-custom text-grey-neutral-60 fw-bold mb-0"
  >
    Mis datos
  </h1>
  <CardData />
</template>

<script setup>
defineOptions({ name: "MyData" });
import CardData from "../components/CardData.vue";
</script>
