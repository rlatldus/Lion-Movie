import { onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import { auth } from "../firebase";
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next("/login");
      }
      unsubscribe();
    });
  } else {
    next();
  }
});

export default router;
