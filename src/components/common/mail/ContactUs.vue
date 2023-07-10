<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label class="name">이름</label>
      <input type="text" v-model="name" name="name" placeholder="로그인이 필요합니다." disabled>
      <label class="email">Email</label>
      <input type="email" v-model="email" name="email" placeholder="로그인이 필요합니다." disabled>
      <label class="message_Title">문의사항</label>
      <textarea name="message" v-model="message" cols="30" rows="5" placeholder="문의 사항을 적어주세요" class="message_Box">
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
      this.name = this.userName;
      this.email = this.userEmail;
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;
}
.form{

}
label {
  padding-top:5px;
  width: 50px;
  height: 40px;
  text-align: left;
  color: #a4b1ba;
  float: left;
}
input[type=text], [type=email], textarea {
  display: flex;
  width: 80%;
  height: 30px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
  resize: vertical;
 
}
 

.message_Title{
  width: 150px;
}
.message_Box{
  width: 100%;
  min-height: 60px;
  max-height: 120px;
}
input[type=submit] {

  width: 100%;
  height: 20px;
  font-weight: 900;
  font-size: 90%;
  background-color: #5673ac;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #3993cf;
  transition:  0.5s ease-in-out;
}

.container {
  
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color:rgb(40, 65, 91);
  min-width: 270x;
  width: 90%;
  max-height: 450px;
  padding: 5px;

}

@media (min-width:350px) and (max-width:1023px){
  .container{

    width: 100%;
  }
  .name, .email {
    display: none;
  }
  input[type=text], [type=email]{
    display: none;
  }
}
</style>