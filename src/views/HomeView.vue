<template>
  <NavBar />
  <main class="bg-primary-grey">
    <div class="container">
      <div class="mx-1">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script setup>
defineOptions({ name: "HomeView" });
import NavBar from "../components/NavBar.vue";
</script>
