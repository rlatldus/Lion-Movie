<template>
  <div>
    <Favorites :item="item"></Favorites>
  </div>
  <div>{{ favorite }}</div>
</template>

<script>
import Favorites from './common/Favorites.vue';
import { mapGetters, useStore } from 'vuex';

export default {
  components: {
    Favorites
  },
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
