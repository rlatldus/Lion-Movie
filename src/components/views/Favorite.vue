<template>
  <div>
  </div>
  <div>{{ favorite }}</div>
</template>

<script>
import { mapGetters, useStore } from 'vuex';

export default {
  computed: {
    ...mapGetters(["getFavorites"]),
    favorite() {
      return this.getFavorites;
    }
  },

};
</script>
<style scoped>
</style>
