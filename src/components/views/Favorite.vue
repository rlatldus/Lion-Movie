<template>
  <main class="alignCard">
    <p>{{ userName }}님이 선택한 찜 목록</p> 
    <Pagination :movies="favorites">
      <template v-slot="{ movie }">
        <MovieCard :movie="movie" />
      </template>
    </Pagination>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import MovieCard from './../common/movieList/MovieCard.vue';
import Pagination from './../common/pagination/Pagination.vue';

export default {
  components: {
    MovieCard,
    Pagination
  },
  computed: {
    ...mapGetters(["getFavorites", "getUserName"]),
    favorites() {
      return this.getFavorites;
    },
    userName() {
      return this.getUserName;
    }
  }
};
</script>

<style lang="scss"  scoped>
.alignCard {
  width: 90vw;
  height: 100%;
  background-color: rgb(24, 35, 61);
  padding: 20px;
  p{
    text-align: center;
    font-size: 30px;
    padding-bottom: 20px;
    color: white;
  }
}
</style>
