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
import { ref, computed, onMounted } from 'vue';
import { mapState, useStore } from 'vuex';
import { auth } from '../firebase';
import UserForm from './common/Form.vue';
import FormWrap from './common/FormWrap.vue';
import AuthButton from './common/AuthButton.vue';
export default {
  components: {
    AuthButton,
    UserForm,
    FormWrap
    
  },
  setup() {
    const store = useStore();
    const formData = ref({ email: '', password: '' });
    console.log(auth);

    const login = () => {
      store.dispatch('login', formData.value);
    }

    const userinfo = () => {
      alert("ddd")
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
      console.log(user, "유저")
      console.log(token, "토큰")

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