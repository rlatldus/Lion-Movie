<template>
  <main class="alignCard">
    <Pagination :movies="favorites">
      <template v-slot="{ movie }">
        <MovieCard :movie="movie" />
      </template>
    </Pagination>
  </main>
</template>

<script>
import MovieCard from './../common/movieList/MovieCard.vue';
import { mapGetters } from 'vuex';
import Pagination from './../common/pagination/Pagination.vue';

export default {
  components: {
    MovieCard,
    Pagination
  },
  computed: {
    ...mapGetters(["getFavorites"]),
    favorites() {
      return this.getFavorites;
    }
  }
};
</script>

<style scoped>
.alignCard {
  display: flex;
}
</style>
