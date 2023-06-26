import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import { auth } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
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
      meta: { requiresAuth: true },
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
// const auth = getAuth();
router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next("/login");
      }
    });
  } else {
    next();
  }
});

export default router;
