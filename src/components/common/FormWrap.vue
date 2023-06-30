<template>
    <main class="formWrap">
        <section class="forms">
            <slot></slot>
        </section>
    </main>
</template>

<script>
export default {
    name: 'FormWrap'
};
</script>


<style  lang="scss" scoped>
.formWrap {
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://img.kor-img.com:4443/images/bg.jpg) center no-repeat;
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
    }
}
</style>