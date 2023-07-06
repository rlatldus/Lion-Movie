<template>
  <main>
  <div>{{ favorites }}</div>
  </main>

</template>

<script>
import { mapGetters, useStore } from 'vuex';

export default {
  computed: {
    ...mapGetters(["getFavorites"]),
    favorites() {
      return this.getFavorites;
    }
  },
  setup() {
    const titles = favorites.map((favorite) => favorite.title);
    console.log(titles);
    return {
      formData,
      signUp
    }
  }
};
</script>
<style scoped>
</style>
