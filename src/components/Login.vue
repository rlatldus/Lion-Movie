<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login()">
        <h2>로그인</h2>
        <label>이메일
          <input v-model="formData.email" autocomplete="email" placeholder="email을 입력해주세요" type="text" />
        </label>
        <label>비밀번호
          <input v-model="formData.password" autocomplete="password" placeholder="password를 입력해주세요" type="password" />
        </label>
        <button type="submit">로그인하기</button>
      </form>
      <span>만약 계정이 없다면, <router-link to="/register">회원가입</router-link>을 먼저 진행해주세요</span>
    </section>
    <button @click="$store.dispatch('logout')">로그아웃</button>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const formData = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', formData.value);
    }

    return {
      formData,
      login,
    }
  }
};
</script>
