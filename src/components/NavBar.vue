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
    <div class="d-flex align-items-center overflow-x-auto overflow-y-hidden shadow-sm">
      <ul
        class="nav nav-tabs d-flex flex-nowrap flex-md-wrap"
        id="tab-container"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-grey-neutral-60 mx-3 active"
            id="tab-datos"
            data-bs-toggle="tab"
            data-bs-target="#tab-pane-datos"
            type="button"
            role="tab"
            aria-controls="tab-pane-datos"
            aria-selected="true"
          >
            Mis datos
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-grey-neutral-60 mx-3"
            id="tab-tareas"
            data-bs-toggle="tab"
            data-bs-target="#tab-pane-tareas"
            type="button"
            role="tab"
            aria-controls="tab-pane-tareas"
            aria-selected="false"
          >
            Mis tareas
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-grey-neutral-60 mx-3"
            id="tab-devoluciones"
            data-bs-toggle="tab"
            data-bs-target="#tab-pane-devoluciones"
            type="button"
            role="tab"
            aria-controls="tab-pane-devoluciones"
            aria-selected="false"
          >
            Mis devoluciones
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-grey-neutral-60 mx-3"
            id="tab-comunicaciones"
            data-bs-toggle="tab"
            data-bs-target="#tab-pane-comunicaciones"
            type="button"
            role="tab"
            aria-controls="tab-pane-comunicaciones"
            aria-selected="false"
          >
            Mis comunicaciones
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-grey-neutral-60 mx-3"
            id="tab-amigos"
            data-bs-toggle="tab"
            data-bs-target="#tab-pane-amigos"
            type="button"
            role="tab"
            aria-controls="tab-pane-amigos"
            aria-selected="false"
          >
            Mis mejores amigos
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
defineOptions({ name: "NavBar" });
</script>

<style scoped></style>
