<template>
  <form @submit.prevent="submitForm">
    <p>영화, 드라마, 예능
      <br />
      신나게 플레이해보아요 !
    </p>
    <h2>{{ formTitle }}</h2>
    <label>
      <input v-model="formData.email" autocomplete="email" placeholder="이메일을 입력해주세요" type="text" />
    </label>
    <small v-if="!isEmailValid(formData.email)" class="error-message">올바른 이메일 형식이 아닙니다.</small>
    <label>
      <input v-model="formData.password" autocomplete="password" placeholder="8자 이상 비밀번호를 입력해주세요" type="password"
        maxlength="15" />
    </label>
    <small v-if="formData.password && formData.password.length < 8" class="error-message">비밀번호는 최소 8자 이상이어야 합니다.</small>
    <button type="submit" :disabled="!isFormValid">{{ submitButtonText }}</button>
  </form>
</template>

<script>
export default {
  props: {
    formTitle: String,
    submitButtonText: String,
    formData: Object,
    submitForm: Function
  },
  computed: {
    isFormValid() {
      const { email, password } = this.formData;
      return this.isEmailValid(email) && password && password.length >= 8;
    }
  },
  methods: {
    isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  max-width: 600px;
  min-width: 300px;
  min-height: 430px;
  width: 50%;
  height: 50%;
  padding: 50px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));

  small {
    color: red;
  }

  p {
    color: white;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
  }

  input {
    padding: 15px 10px;
    width: 100%;
    margin-top: 10px;
    background-color: #404040;
    color: white;
  }

  button {
    margin-top: 50px;
    padding: 15px 10px;
    width: 100%;
    font-weight: 900;
    background-color: red;
    color: white;

    &:hover {
      background-color: rgb(224, 0, 0);
    }

    &:active {
      background-color: red;
      border: 1px solid white;
    }

    &:disabled {
      background-color: rgb(172, 170, 170);
      border: 1px solid white;
    }
  }
}
</style>
