import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AuthGuard from "../util/authguard";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/aboutus",
      component: () => import("../components/About.vue"),
    },
    {
      path: "/search",
      component: () => import("../components/Search.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/favorite",
      component: () => import("../components/Favorite.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/setting",
      component: () => import("../components/Setting.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

AuthGuard(router);

export default router;
