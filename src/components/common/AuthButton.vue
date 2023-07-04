<template>
    <div class="button">
        <button @click="loginWithGoogle">Google 로그인</button>
    </div>
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
.button {
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  margin-top: 50px;
  padding: 15px 10px;
  background-color: #ff7979;
  color: white;

  &:hover {
    background-color: #e00000;
  }

  &:active {
    background-color: red;
    border: 1px solid white;
  }
}
</style>
