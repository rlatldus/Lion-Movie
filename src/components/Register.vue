<template>
  <div id="register">
    <h4>아이디</h4>
    <input v-model="formData.email" type="text" />
    <h4>패스워드</h4>
    <input v-model="formData.password" type="password"/>
    <div>
      <button @click="signUp()">가입하기</button>
    </div>
  </div>
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