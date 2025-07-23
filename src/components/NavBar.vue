<template>
  <nav class="navbar bg-white py-0">
    <div class="nav-bar-menu-container d-flex align-items-center w-100">
      <div class="container mx-1">
        <div class="d-flex justify-content-between align-items-center">
          <img src="/src/assets/Menu.svg" alt="Menu logo" />
          <img
            src="/src/assets/Search.png"
            alt="Search magnifying glass logo"
          />
          <img src="/src/assets/Logo.png" alt="Tienda animal logo" />
          <img src="/src/assets/Login.png" alt="Log in logo" />
          <img src="/src/assets/Cart.png" alt="Shopping cart logo" />
        </div>
      </div>
    </div>

    <div
      class="d-flex align-items-center overflow-x-auto overflow-y-hidden custom-shadow"
    >
      <ul class="nav nav-tabs d-flex flex-nowrap flex-md-wrap" role="tablist">
        <li
          v-for="tab in navBarTabs"
          :key="tab.id"
          class="nav-item active"
          role="presentation"
        >
          <router-link
            class="nav-link text-center text-grey-neutral-60 mx-3"
            :to="tab.route"
            role="tab"
            :aria-label="`Ir a ${tab.label}`"
            active-class="active"
            exact-active-class="active"
          >
            {{ tab.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
defineOptions({ name: "NavBar" });
import { navBarTabs } from "../../src/helpers/navBarTabs";
</script>

<style scoped>
.nav-bar-menu-container {
  border-bottom: 1px solid var(--grey-neutral-10);
  min-height: 62px;
}

.nav-tabs-container {
  min-height: 50px;
}

.nav-tabs {
  border-bottom: none;
}

.nav-link:hover {
  color: var(--grey-neutral-60);
}

.nav-tabs .nav-link {
  border: transparent;
  flex-shrink: 0;
  min-width: 118px;

  white-space: nowrap;
}

.nav-tabs .nav-link {
  border-bottom: 4px solid transparent;
  font-weight: 600;
}

.nav-tabs .nav-link.active {
  border: transparent;
  border-bottom: 4px solid var(--primary-green);
  color: var(--primary-green);
  font-weight: 700;
}
</style>
