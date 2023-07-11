<template>
    <main class="formWrap">
        <section class="forms">
            <slot></slot>
            <span v-if="!token && !hasAccount">만약 계정이 없다면, <router-link to="/register"><span
                        class="deco">회원가입</span></router-link>을 먼저
                진행해주세요</span>
            <span v-if="!token && hasAccount">만약 계정이 있다면, <router-link to="/login"><span
                        class="deco">로그인</span></router-link>페이지로 이동해주세요</span>
        </section>
    </main>
</template>

<script>
export default {
    name: 'FormWrap',
    props: {
        token: {
            type: Boolean,
            default: false
        },
        hasAccount: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style  lang="scss" scoped>
.formWrap {
    width: 100%;
    @media (min-width: 549px) {
        margin-left: 50px;
        width: calc(100% - 50px);
    }
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(./../../../assets/images/bg.jpg) center no-repeat;
    background-size: cover;

    .forms {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(rgba(52, 52, 52, 0.5), rgba(0, 0, 0, 0.8));

        span {
            margin-top: 20px;
            width: 50%;
            max-width: 600px;
            min-width: 300px;
            text-align: center;
            color: white;
        }

        .deco {
            color: #ff3c3c;
            font-size: 1.3rem;
        }
    }
}</style>
