<template>
  <FormWrap :token="false" :hasAccount="true">
    <user-form :name="true" formTitle="회원가입" submitButtonText="화원가입하기" :formData="formData"
      :submitForm="signUp"></user-form>
  </FormWrap>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import UserForm from './../common/form/Form.vue';
import FormWrap from './../common/form/FormWrap.vue';
export default {
  components: {
    UserForm,
    FormWrap
  },
  setup() {
    const formData = ref({ email: '', password: '', displayName: '' });
    const store = useStore();

    const signUp = () => {
      store.dispatch('register', formData.value);
    }

    return {
      formData,
      signUp
    }
  }

};
</script>