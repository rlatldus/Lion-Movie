<template>
  <div class="hello">
    <h3>로그인</h3>
    <h4>아이디</h4>
    <input v-model="email" placeholder="email을 입력해주세요" type="text" />
    <h4>패스워드</h4>
    <input v-model="password" placeholder="password를 입력해주세요" type="password" />
    <div><button @click="login()">로그인하기</button></div>
    <span>만약 계정이 없다면, <router-link to="/register">회원가입</router-link>을 먼저 진행해주세요</span>

    <button @click="logOut()">로그아웃</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { saveAccessToken } from '../auth/auth';
import { config } from '../firebase';

initializeApp(config);

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          saveAccessToken(user.accessToken);
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // 로그아웃 성공
          console.log('로그아웃되었습니다.');
          // 여기에서 로그아웃 후에 수행할 작업을 추가할 수 있습니다.
        })
        .catch((error) => {
          // 로그아웃 실패
          console.log('로그아웃 중에 오류가 발생했습니다.', error);
        });
    }
  }
};
</script>
