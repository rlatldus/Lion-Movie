<template>
  <div class="alignCard">
    <div class="moviebackground">
      <div class="mymovie">
        <p>{{ userName }}님이 선택한 찜 목록</p>
        <Pagination :movies="favorites">
          <template v-slot="{ movie }">
            <MovieCard :movie="movie" />
          </template>
        </Pagination>
      </div>
    </div>
  </div>
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
  width: 100%;
  background-color: rgb(24, 35, 61);

  .moviebackground {
    padding-top: 100px;
    position: relative;
    height: 400px;
    background-color: rgb(4, 4, 4);
  }

  .mymovie {
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }

  p {
    text-align: center;
    font-size: 30px;
    padding-bottom: 20px;
    color: white;
  }
}
</style>
