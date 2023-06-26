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
import {config} from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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