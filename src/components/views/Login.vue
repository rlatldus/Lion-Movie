
<template>
  <FormWrap :token="token" :hasAccount="false">
    <user-form v-if="!token" formTitle="로그인" submitButtonText="로그인하기" :formData="formData" :submitForm="login">
    </user-form>
    <auth-button v-if="!token"></auth-button>
    <div class="font" v-else>
      <p><span>{{ userName }} </span>님! 정말로 로그아웃 하시려나요?</p>
      <button class="logout" @click="logout"> 로그아웃</button>
    </div>
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
    ...mapGetters(["getToken", "getUserEmail", "getUserName"]),
    token() {
      return this.getToken;
    },
    userEmail() {
      return this.getUserEmail;
    },
    userName() {
      return this.getUserName;
    }
  },
  setup() {
    const store = useStore();
    const formData = ref({ email: '', password: '' });

    const login = () => {
      store.dispatch('login', formData.value);
      console.log(store)
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
.font {
  display: flex;
  flex-direction: column;
  .logout {
    text-align: center;
    width: 100px1;
    max-width: 600px;
    min-width: 300px;
    margin: 50px auto 0;
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

  p {
    text-align: center;
    font-size: 30px;
    color: white;

    >span {
      font-size: 40px;
      font-weight: 900;
    }
  }
}
</style>