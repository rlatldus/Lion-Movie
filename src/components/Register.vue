<template>
  <div id="register">
    <h4>아이디</h4>
    <input v-model="email" type="text" />
    <h4>패스워드</h4>
    <input v-model="password" type="password"/>
    <div>
      <button @click="signUp()">가입하기</button>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
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