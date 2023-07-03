<template>
    <div>
        <button @click="loginWithGoogle">Google 로그인</button>
        <div v-if="loadingMessage !== ''">
            <Loading v-if="loadingMessage !== ''" :message="loadingMessage" :startLoading="startLoading"
                :stopLoading="stopLoading" />
        </div>
    </div>
</template>

<script>
import Loading from './../Loading.vue'
import { onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase'
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import router from "../../router";

export default {
    components: {
        Loading
    },
    setup() {
        const store = useStore()
        const user = ref(null)
        const loadingMessage = ref('')

        const startLoading = () => {
            loadingMessage.value = '로딩 중입니다...'
        }

        const stopLoading = () => {
            loadingMessage.value = ''
        }

        // 사용자 인증 상태 변경 감지
        watchEffect(() => {
            onAuthStateChanged(auth, (currentUser) => {
                startLoading()
                if (currentUser) {
                    // 로그인 상태인 경우 처리할 코드 작성
                    user.value = currentUser
                    const token = currentUser.accessToken
                    store.commit('SET_USER', user.value)
                    store.commit('SET_TOKEN', token)
                    localStorage.setItem("token", token);
                }
                stopLoading()
            })
        })

        const loginWithGoogle = () => {
            const provider = new GoogleAuthProvider()
            signInWithRedirect(auth, provider)
        }

        return {
            loginWithGoogle,
            loadingMessage,
            startLoading,
            stopLoading
        }
    }
}
</script>
