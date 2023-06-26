<template>
  <main class="register">
    <section class="forms">
      <form class="login" @submit.prevent="signUp()">
        <h2>회원가입</h2>
        <label>이메일
          <input v-model="formData.email" autocomplete="email" placeholder="email을 입력해주세요" type="text" />
        </label>
        <label>비밀번호
          <input v-model="formData.password" autocomplete="password" placeholder="password를 입력해주세요" type="password" />
        </label>
        <button type="submit">회원가입하기</button>
      </form>
      <span>만약 계정이 있다면, <router-link to="/login">로그인</router-link>페이지로 이동해주세요</span>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const formData = ref({});
    const store = useStore();

    const signUp = () => {
      store.dispatch('register', formData.value);
    }

    return {
      formData,
      signUp
    }
  }
};
</script>