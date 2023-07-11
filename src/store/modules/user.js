import router from "../../router";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { parseJwt } from "../../components/hooks/useParseJwt";
import { doc, setDoc } from "firebase/firestore";
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
    getUserEmail(state) {
      return parseJwt(state.token).email;
    },
    getUserName(state) {
      return parseJwt(state.token).name;
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const token = auth.currentUser.accessToken;
        commit("SET_USER", { user: auth.currentUser, token });
        localStorage.setItem("token", token);
        const uid = auth.currentUser.uid;
        alert("로그인 되었습니다");
        router.push("/");
        await fetchUserProfile(uid);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("사용자가 없습니다");
            break;
          case "auth/wrong-password":
            alert("비밀번호가 다릅니다");
            break;
        }
        return;
      }
    },

    async register({}, details) {
      const { email, password, displayName } = details;
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName });
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { displayName });

        console.log(user);
        alert("회원가입 되었습니다.");
        router.push("/login");
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("중복된 이메일입니다.");
            break;
          case "auth/invalid-email":
            alert("잘못된 이메일 형식입니다.");
            break;
          case "auth/operation-not-allowed":
            alert("허용되지 않은 작업입니다.");
            break;
          case "auth/weak-password":
            alert("비밀번호가 취약합니다.");
            break;
          default:
            alert("정보를 다시 한번 확인해주세요.");
        }
      }
    },

    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      localStorage.removeItem("token");
      alert("로그아웃 되었습니다.");
      router.push("/");
    },
  },
};
