import { createStore } from "vuex";
import router from "../../router";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// async function getUserInfo(token) {
//   try {
//     const response = await fetch("https://movie-33ea4-default-rtdb.firebaseio.com", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const userInfo = await response.json();
//     return userInfo;
//   } catch (error) {
//     throw new Error('유저 정보를 가져오는데 실패했습니다');
//   }
// }

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem("token") || null,
    favorites: JSON.parse(localStorage.getItem("favorite")) || [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_TOKEN(state) {
      state.token = null;
    },
    ADD_FAVORITE(state, item) {
      state.favorites.push(item);
    },
    REMOVE_FAVORITE(state, item) {
      const index = state.favorites.findIndex((favorite) => favorite.id === item.id);
      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
  },
  actions: {
    addFavorite({ commit }, item) {
      alert('찜됐어요')
      commit("ADD_FAVORITE", item);
      const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
      favorites.push(item);
      localStorage.setItem("favorite", JSON.stringify(favorites));
    },

    removeFavorite({ commit }, item) {
      alert("찜해제됐어요");
      commit("REMOVE_FAVORITE", item);
      const favorites = JSON.parse(localStorage.getItem("favorite"));
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    },

    async login({ commit }, details) {
      //NOTE 로그인
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const token = await auth.currentUser.getIdToken();
        localStorage.setItem("token", token);
        commit("SET_TOKEN", token);
        console.log(auth.currentUser);
      } catch (error) {
        console.log(error);
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
      alert("로그인 되었습니다.");
      router.push("/");
    },

    async register({ commit }, details) {
      //NOTE 회원가입
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
        return alert("회원가입 되었습니다.");
      }

      commit("SET_USER", auth.currentUser);
      router.push("/login");
    },

    async logout({ commit }) {
      //NOTE 로그아웃
      await signOut(auth);
      commit("CLEAR_USER");
      commit("CLEAR_TOKEN");
      localStorage.removeItem("token");
      router.push("/");
      console.log(auth.currentUser);
    },

    // async fetchUserInfo({ commit, state }) {
    //   //NOTE 유저정보 가져오기
    //   if (!state.token) return;
    //   try {
    //     const userInfo = await getUserInfo(state.token);
    //     commit("SET_USER", userInfo);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
