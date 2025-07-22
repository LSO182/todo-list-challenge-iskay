<template>
  <NavBar />
  <div class="bg-primary-grey">
    <div class="container home-container">
      <div class="mx-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: "HomeView" });
import NavBar from "../components/NavBar.vue";
</script>
