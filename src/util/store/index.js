import { createStore } from "vuex";
import router from "../../router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },

  actions: {
    async login({ commit }, details) { //NOTE 로그인
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log(auth.currentUser);
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case "auth/user-not-found":
            alert("사용자가 없습니다");
            break;
          case "auth/wrong-password":
            alert("비밀번호가 다릅니다");
            break;
          default:
            alert("정보를 다시 한번 확인해주세요");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },

    async register({ commit }, details) { //NOTE 회원가입
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log(auth.currentUser);
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("중복된 이메일입니다.");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("비밀번호가 취약합니다.");
            break;
          default:
            alert("정보를 다시 한번 확인해주세요");
        }
        return;
      }

      commit("SET_USER", auth.currentUser);
      router.push("/login");
    },

    async logout({ commit }) { //NOTE 로그아웃
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/login");
    },
  },
});
