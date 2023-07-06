<template>
    <button class="google-login-button" @click="loginWithGoogle">
        <img src="./../../assets/images/google.png" alt="Google 로고">
            구글로 로그인
    </button>
</template>

<script>
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { auth } from '../../firebase'

export default {
    setup() {
        const store = useStore()
        const user = ref(null)
        // 사용자 인증 상태 변경 감지
        watchEffect(() => {
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    // 로그인 상태인 경우 처리할 코드 작성
                    user.value = currentUser
                    const token = currentUser.accessToken
                    store.commit('SET_USER', { currentUser ,token })
                    localStorage.setItem("token", token);
                    alert('로그인됐어요')
                }
            })
        })

        const loginWithGoogle = () => {
            const provider = new GoogleAuthProvider()
            signInWithRedirect(auth, provider)
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
