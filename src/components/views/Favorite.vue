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
import MovieCard from './../common/favorite/MovieCard.vue';
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
@keyframes slide-left {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

.alignCard {
  width: 100%;

  @media (min-width: 549px) {
    margin-left: 50px;
    width: calc(100% - 50px);
  }

  background-color: #1e293b;

  .mymovie {
    @media (min-width: 1024px) {
      width: 80%;

    }

    width: 90%;
    text-align: center;
    margin: 220px auto 0;
  }

  p {
    z-index: 1;
    top: 100px;
    position: absolute;
    font-size: 30px;
    color: white;
    animation: slide-left 1s;

    >span {
      font-size: 40px;
      font-weight: 900;
    }
  }
}</style>
