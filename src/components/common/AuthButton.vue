<template>
    <div>
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
                    store.commit('SET_USER', user.value)
                    store.commit('SET_TOKEN', token)
                    localStorage.setItem("token", token);
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
