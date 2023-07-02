<template>
  <FormWrap>
    <user-form formTitle="회원가입" submitButtonText="화원가입하기" :formData="formData" :submitForm="signUp"></user-form>
    <span>만약 계정이 있다면, <router-link to="/login">로그인</router-link>페이지로 이동해주세요</span>
  </FormWrap>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import UserForm from './common/Form.vue';
import FormWrap from './common/FormWrap.vue';
export default {
  components: {
    UserForm,
    FormWrap
  },
  setup() {
    const formData = ref({ email: '', password: '' });
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