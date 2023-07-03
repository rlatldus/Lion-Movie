<template>
    <div>
        <button @click="loginWithGoogle">Google 로그인</button>
        <button @click="logout">Google 로그아웃</button>
    </div>
</template>

<script>
import { onAuthStateChanged, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase'
import { ref, watchEffect } from 'vue'

export default {
    setup() {
        const user = ref(null)

        // 사용자 인증 상태 변경 감지
        watchEffect(() => {
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    
                    // 로그인 상태인 경우 처리할 코드 작성
                    user.value = currentUser
                    console.log(user.value.accessToken, "hhh")
                    localStorage.setItem("token", user.value.accessToken);
                } else {
                    // 로그아웃 상태인 경우 처리할 코드 작성
                    user.value = null
                }
            })
        })

        const loginWithGoogle = () => {
            const provider = new GoogleAuthProvider()
            signInWithRedirect(auth, provider)
        }

        const logout = () => {
            auth.signOut()
                .then(() => {
                    console.log('로그아웃되었습니다.')
                })
        }

        return {
            user,
            loginWithGoogle,
            logout
        }
    }
}
</script>
