<template>
  <main id="login">
    <section v-if="!token" class="forms">
      <form @submit.prevent="login()">
        <p>영화, 드라마, 예능
          <br/>
          신나게 플레이해보아요 !
        </p>
        <h2>로그인</h2>
        <label>
          <input v-model="formData.email" autocomplete="email" placeholder="email을 입력해주세요" type="text" />
        </label>
        <label>
          <input v-model="formData.password" autocomplete="password" placeholder="password를 입력해주세요" type="password" />
        </label>
        <button type="submit">로그인하기</button>
      </form>
      <span>만약 계정이 없다면, <router-link to="/register"><span class="deco">회원가입</span></router-link>을 먼저 진행해주세요</span>
    </section>
    <section v-else class="forms">
      <form>
        <h2>회원정보</h2>
        <label>이메일
          <input v-model="formData.email" autocomplete="email" placeholder="email을 입력해주세요" type="text" />
        </label>
        <label>비밀번호
          <input v-model="formData.password" autocomplete="password" placeholder="password를 입력해주세요" type="password" />
        </label>
        <button type="submit">저장하기</button>
      </form>
      <button class="logout" @click="logout">로그아웃</button>
    </section>
  </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { mapState, useStore } from 'vuex';
import { auth } from '../firebase';
export default {
  setup() {
    const store = useStore();
    const formData = ref({});
    console.log(auth);

    const login = () => {
      store.dispatch('login', formData.value);
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
		console.log(user)
      console.log(token)

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
#login{
  position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://img.kor-img.com:4443/images/bg.jpg) center no-repeat;
    background-size: cover;
        .forms{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(rgba(52, 52, 52, 0.5), rgba(0,0,0,0.8));
          form{
            max-width: 600px;
            min-width: 300px;
            width: 50%;
            height: 50%;
            padding: 50px;
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1));
            p{
              color: white;
              font-style: italic;
              font-weight: 500;
              margin-bottom: 20px;
            }
            h2{
              color: white;
            }
            input{
              padding: 15px 10px;
              width: 100%;
              margin-top: 10px;
              background-color: #404040;
              color: white;
            }
            button{
              margin-top: 50px;
              padding: 15px 10px;
              width: 100%;
              font-weight: 900;
              background-color: red;
              color: white;
              &:hover{
              background-color: rgb(224, 0, 0);
              }
              &:active{
              background-color: red;
              border: 1px solid white;
              }

            }

          }
          .logout{
            width: 50%;
            max-width: 600px;
            min-width: 300px;
            margin-top: 50px;
              padding: 15px 10px;
              background-color: #ff7979;
              color: white;
              &:hover{
              background-color: #e00000;
              }
              &:active{
              background-color: red;
              border: 1px solid white;
              }
          }
          span{
            margin-top: 20px;
            width: 50%;
            max-width: 600px;
            min-width: 300px;
            text-align: center;
              color: white;      
              .deco{
                color: #ff3c3c;
                font-size: 1.3rem;
                
              }    
            }
      }
  }


</style>