<template>
  <div>
    <Favorites :item="item"></Favorites>
  </div>
</template>

<script>
import Favorites from './common/Favorites.vue';

export default {
  components: {
    Favorites
  }
};
</script>
