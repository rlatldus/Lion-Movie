<template>
    <div>
        <p>{{ loadingMessage }}</p>
    </div>
</template>

<script>
import { ref, onUnmounted } from 'vue'

export default {
        props: {
        startLoading: {
            type: Function,
            required: true
        },
        stopLoading: {
            type: Function,
            required: true
        }
    },
    setup() {
        const loadingMessage = ref('')
        let loadingInterval = null

        const startLoading = () => {
            loadingMessage.value = '로딩 중입니다...'
            loadingInterval = setInterval(() => {
                loadingMessage.value += '.'
            }, 500)
        }

        const stopLoading = () => {
            clearInterval(loadingInterval)
            loadingMessage.value = ''
        }

        // 컴포넌트가 언마운트될 때 인터벌 정리
        onUnmounted(() => {
            clearInterval(loadingInterval)
        })

        return {
            loadingMessage,
            startLoading,
            stopLoading
        }
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
    background-color: aqua;
}
</style>
