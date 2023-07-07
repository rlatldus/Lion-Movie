<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>이름</label>
      <input type="text" v-model="name" name="name" placeholder="이름을 적어주세요" disabled>
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Email 주소를 적어주세요" disabled>
      <label>문의사항</label>
      <textarea name="message" v-model="message" cols="30" rows="5" placeholder="문의 사항을 적어주세요">
          </textarea>

      <input type="submit" value="보내기">
    </form>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';
//이메일, 이름 가져오기
import { mapGetters } from 'vuex';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  //이메일, 이름 정보 가져오기
  computed: {
    ...mapGetters(["getUserEmail", "getUserName"]),
    userEmail() {
      return this.getUserEmail;
    },
    userName() {
      return this.getUserName;
    }
  },
  //가져온 정보 연결하기
    created() {
    this.name = this.userName;
    this.email = this.userEmail;
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          // 'service_23pav3j', 'template_typk2pw', e.target, 'WWqOl_WK204GrX3fQ',{
          //   name: this.name,
          //   email: this.email,
          //   message: this.meessage
          // },
          // 'service_4pfr0gv', 'template_ss5jon8', e.target, 'dQ_ImAPjB-V6dex0O',{
          //   name: this.name,
          //   email: this.email,
          //   message: this.meessage
          // },
          'service_wx9d50o', 'template_uip8r4a', e.target, 'wlEuG-f4jgV_RhH2y', {
          name: this.name,
          email: this.email,
          message: this.meessage
        },
        )
      } catch (err) {
        if (err instanceof ReferenceError) {
          alert("JSON Error: " + err.message);
        } else {
          throw err;
        }
      }
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  color: #3993cf;
  float: left;
}

input[type=text],
[type=email],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
/* 입력 못하게 막을때 효과 */
input:disabled{
  background-color: #ccc;
}

input[type=submit] {
  font-weight: 900;
  font-size: 110%;
  background-color: #4CAF50;
  color: white;
  padding: 12px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #3993cf;
  scale: 1.15;
  transition: 0.5s ease-in-out;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  min-width: 270x;
  width: 100%;
}
</style>