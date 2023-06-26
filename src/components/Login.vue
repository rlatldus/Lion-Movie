<template>
  <div class="hello">
    <h4>아이디</h4>
    <input type="text" />
    <h4>패스워드</h4>
    <input type="password"/>
    <div><button @click="SignUp()">가입하기</button></div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    SignUp () {
      console.log('signUp called')
    }
  }
}
</script>