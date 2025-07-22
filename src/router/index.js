// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MyData",
    component: () => import("../views/MyData.vue"),
  },
  {
    path: "/mis-tareas",
    name: "MyTasks",
    component: () => import("../views/MyTasks.vue"),
  },
  {
    path: "/mis-devoluciones",
    name: "MyReturns",
    component: () => import("../views/MyReturns.vue"),
  },
  {
    path: "/mis-comunicaciones",
    name: "MyComunication",
    component: () => import("../views/MyComunication.vue"),
  },
  {
    path: "/mis-mejores-amigos",
    name: "MyBestFriends",
    component: () => import("../views/MyBestFriends.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
