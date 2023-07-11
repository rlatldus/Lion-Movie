<template>
  <div class="alignCard">
    <div class="mymovie">
      <p><span>{{ userName }} </span>님이 선택한 찜 목록</p>

      <Pagination :movies="favorites">
        <template v-slot="{ movie }">
          <MovieCard :movie="movie" />
        </template>
      </Pagination>
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
    Pagination,
  },
  computed: {
    ...mapGetters(["getFavorites", "getUserName"]),
    favorites() {
      return this.getFavorites;
    },
    userName() {
      return this.getUserName;
    }
  },

};
</script>

<style lang="scss" scoped>
.alignCard {
  width: 100%;
  background-color: #1e293b;

  .mymovie {
    width: 80%;
    text-align: center;
    margin: 250px auto 0;
  }

  p {
    z-index: 1;
    top: 100px;
    position: absolute;
    font-size: 30px;
    color: white;
    >span{
      font-size: 40px;
      font-weight: 900;
    }
  }
}
</style>
