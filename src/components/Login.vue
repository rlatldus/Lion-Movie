<template>
  <main class="login">
    <section v-if="!token" class="forms">
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
    <section v-else class="forms">
      <form class="login">
        <h2>회원정보</h2>
        <label>이메일
          <input v-model="formData.email" autocomplete="email" placeholder="email을 입력해주세요" type="text" />
        </label>
        <label>비밀번호
          <input v-model="formData.password" autocomplete="password" placeholder="password를 입력해주세요" type="password" />
        </label>
        <button type="submit">저장하기</button>
      </form>
      <button @click="logout">로그아웃</button>
    </section>
  </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { mapState, useStore } from 'vuex';
import { auth } from '../firebase';
export default {
  setup() {
    const store = useStore();
    const formData = ref({});
    console.log(auth);

    const login = () => {
      store.dispatch('login', formData.value);
    }

    const logout = () => {
      store.dispatch('logout');
    }

    const user = computed(() => {
      return store.state.user;
    });

    const token = computed(() => {
      return store.state.token;
    });

    onMounted(() => {
      store.dispatch('fetchUserInfo');
		console.log(user)
      console.log(token)

    });

    return {
      formData,
      login,
      logout,
      user,
      token
    }
  }
};
</script>
