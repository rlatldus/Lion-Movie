import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AuthGuard from "../util/authguard";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta:{hideFooter:false},
    },
    {
      path: "/aboutus",
      component: () => import("../components/About.vue"),
      meta:{hideFooter:false},
    },
    {
      path: "/search",
      component: () => import("../components/Search.vue"),
      meta:{hideFooter:false},
      // meta: { requiresAuth: true },
    },
    {
      path: "/favorite",
      component: () => import("../components/views/Favorite.vue"),
      
      meta: { requiresAuth: true, hideFooter:false},
    },
    {
      path: "/login",
      component: () => import("../components/views/Login.vue"),
      meta:{hideFooter:true},
      
    },
    {
      path: "/register",
      component: () => import("../components/views/Register.vue"),
      meta:{hideFooter:true},
    },
   
  ],
});

AuthGuard(router);

export default router;
