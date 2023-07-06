import router from "../../router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { parseJwt } from "../../components/hooks/useParseJwt";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || null,
  },
  mutations: {
    SET_USER(state, { user, token }) {
      state.user = user;
      state.token = token;
    },
    CLEAR_USER(state) {
      state.user = null;
      state.token = null;
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    },
    getUserEmail(state){
    return parseJwt(state.token).email
    }
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const token = auth.currentUser.accessToken;
        commit("SET_USER", { user: auth.currentUser, token });
        localStorage.setItem("token", token);
        alert("로그인 되었습니다")
        router.push("/");
      } catch (error) {
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
    },

    async register({}, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("회원가입 되었습니다.");
        router.push("/login");
      } catch (error) {
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
      }
    },

    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      localStorage.removeItem("token");
      router.push("/");
    },
  },
};
