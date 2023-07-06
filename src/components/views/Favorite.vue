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

};
</script>
<style scoped>
</style>
