import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/timer",
    component: () => import("@/views/Timer/Timer.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/About/About.vue"),
  },
  {
    path: "/settings",
    component: () => import("@/views/Settings/Settings.vue"),
  },
  {
    path: "/playlist",
    component: () => import("@/views/Playlist/Playlist.vue"),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
