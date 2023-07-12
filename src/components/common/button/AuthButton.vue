<template>
  <button class="google-login-button" @click="loginWithGoogle">
    <img src="./../../../assets/images/google.png" alt="Google 로고">
    구글로 로그인
  </button>
</template>

<script>
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { auth } from '../../../firebase';
import router from "../../../router";
import { nextTick } from 'vue';

export default {
  setup() {
    const store = useStore()
    const user = ref(null)
    onAuthStateChanged(auth, (currentUser) => {
      console.log("로딩로딩22")
      user.value = currentUser
      if (user.value && user.value.emailVerified) {
        console.log("로딩로딩33")
        console.log(user.value.emailVerified)
        const token = currentUser.accessToken
        store.commit('SET_USER', { currentUser, token })
        localStorage.setItem("token", token);
        nextTick(() => {
          router.push("/");
        });
      }
    })

    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(auth, provider)
      console.log("로딩로딩11")

    }

    return {
      loginWithGoogle,
    }
  }
}
</script>
<style scoped>
.google-login-button {
  background-color: #4285f4;
  color: #ffffff;
  display: inline-block;
  border-radius: 2px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 24px;

}

.google-login-button:hover {
  background-color: #3367d6;
}

.google-login-button:active {
  background-color: #2a56c6;
}

.google-login-button:focus {
  outline: none;
}

.google-login-button img {
  vertical-align: middle;
  margin-right: 10px;
}
</style>
