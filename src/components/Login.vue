<template>
  <div class="hello">
    <h3>로그인</h3>
    <h4>아이디</h4>
    <input v-model="email" placeholder="email을 입력해주세요" type="text" />
    <h4>패스워드</h4>
    <input v-model="password" placeholder="password를 입력해주세요" type="password"/>
    <div><button @click="login()">로그인하기</button></div>
    <span>만약 계정이 없다면, <router-link to="/register">회원가입</router-link>을 먼저 진행해주세요</span>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

var config = {
	apiKey: "AIzaSyAETufK72MSllV8jqp2AsQUtJLdRh0hPDk",
    authDomain: "movie-33ea4.firebaseapp.com",
    databaseURL: "https://movie-33ea4-default-rtdb.firebaseio.com",
    projectId: "movie-33ea4",
    storageBucket: "movie-33ea4.appspot.com",
    messagingSenderId: "785708981878",
    appId: "1:785708981878:web:9f34e3a6b329bed9580957",
    measurementId: "G-5DJ03P9ZKV",
    }
		initializeApp(config)

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>