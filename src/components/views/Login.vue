
<template>
  <FormWrap :token="token" :hasAccount="false">
    <user-form v-if="!token" formTitle="로그인" submitButtonText="로그인하기" :formData="formData" :submitForm="login">
    </user-form>
    <auth-button v-if="!token"></auth-button>
    <button v-else class="logout" @click="logout"> {{userEmail}}님의 로그아웃</button>
  </FormWrap>
</template>

<script>
import { ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
import AuthButton from './../common/button/AuthButton.vue';
import UserForm from './../common/form/Form.vue';
import FormWrap from './../common/form/FormWrap.vue';
export default {
  components: {
    AuthButton,
    UserForm,
    FormWrap

  },
  computed: {
    ...mapGetters(["getToken", "getUserEmail"]),
    token() {
      return this.getToken;
    },
    userEmail() {
      return this.getUserEmail;
    }
  },
  setup() {
    const store = useStore();
    const formData = ref({ email: '', password: '' });

    const login = () => {
      store.dispatch('login', formData.value);
    }

    const logout = () => {
      store.dispatch('logout');
    }

    return {
      formData,
      login,
      logout,
    }
  }
};
</script>

<style  lang="scss" scoped>
.logout {
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  margin-top: 50px;
  padding: 15px 10px;
  background-color: #ff7979;
  color: white;

  &:hover {
    background-color: #e00000;
  }

  &:active {
    background-color: red;
    border: 1px solid white;
  }
}


</style>