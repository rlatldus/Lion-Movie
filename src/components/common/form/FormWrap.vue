<template>
    <main class="formWrap">
        <section class="forms">
            <slot></slot>
            <span v-if="user">{{formText}} <router-link to="`${location}`"><span class="deco">{{loginout}}</span></router-link>{{formgider}}</span>
        </section>

    </main>
</template>

<script>
export default {
    name: 'FormWrap',
    props: {
        user: Boolean,
  },
}

</script>


<style  lang="scss" scoped>
.formWrap {
    margin-left: 50px;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(./../../../assets/images/bg.jpg) center no-repeat;
    background-size: cover;
    @media (max-width : 549px) {
		position: absolute;
        margin-left: 0px;
	}
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