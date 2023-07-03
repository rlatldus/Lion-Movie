
<template>
  <FormWrap>
    <user-form v-if="!token" formTitle="로그인" submitButtonText="로그인하기" :formData="formData" :submitForm="login">
    </user-form>
    <span v-if="!token">만약 계정이 없다면, <router-link to="/register"><span class="deco">회원가입</span></router-link>을 먼저
      진행해주세요</span>
    <user-form v-else formTitle="회원정보" submitButtonText="저장하기" :formData="formData" :submitForm="userinfo">
    </user-form>
    <button v-else class="logout" @click="logout">로그아웃</button>
    <auth-button></auth-button>
  </FormWrap>
</template>

<script>
import { ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
import AuthButton from './common/AuthButton.vue';
import UserForm from './common/Form.vue';
import FormWrap from './common/FormWrap.vue';
export default {
  components: {
    AuthButton,
    UserForm,
    FormWrap

  },
  computed: {
    ...mapGetters(["getToken"]),
    token() {
      return this.getToken;
    }
  },
  setup() {
    const store = useStore();
    const formData = ref({ email: '', password: '' });

    const login = () => {
      store.dispatch('login', formData.value);
    }

    const userinfo = () => {
      alert("ddd")
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

span {
  margin-top: 20px;
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  text-align: center;
  color: white;

  .deco {
    color: #ff3c3c;
    font-size: 1.3rem;

  }
}
</style>