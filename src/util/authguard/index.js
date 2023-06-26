import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function AuthGuard(router) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          next(false);
        } else {
          alert("로그인 먼저 해주세요");
          next("/login");
        }
        unsubscribe();
      });
    } else {
      next();
    }
  });
}
