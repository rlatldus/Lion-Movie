<template>
  <main id="Home-page">

    <RandomMovie></RandomMovie>

    <movie-list-wrap title="상영 영화" :movies="movies" :base-image-url="baseImageUrl" :apiKey="apiKey"
      type="movie"></movie-list-wrap>

    <movie-list-wrap title="인기 영화" :movies="popularMovies" :base-image-url="baseImageUrl" :apiKey="apiKey"
      type="movie"></movie-list-wrap>

    <movie-list-wrap title="인기 티비시리즈" :movies="popularTvSeries" :base-image-url="baseImageUrl" :apiKey="apiKey"
      type="tv"></movie-list-wrap>


    <movie-list-wrap title="현재상영 티비시리즈" :movies="OntheAirTvSeries" :base-image-url="baseImageUrl" :apiKey="apiKey"
      type="tv"></movie-list-wrap>

  </main>
</template>

<script>
import axios from 'axios';
import MovieListWrap from './../common/movieList/Movies.vue';
import RandomMovie from './../common/movieList/RandomMovie.vue';


export default {
  name: 'Home',
  components: {
    MovieListWrap,
    RandomMovie,
  },

  data() {
    return {
      movies: [],
      popularMovies: [],
      popularTvSeries: [],
      OntheAirTvSeries: [],
      baseImageUrl: 'https://image.tmdb.org/t/p/original',
      apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
      randomMovies: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchMovies();
    // this.fetchRandomMovie();
  },

  methods: {
    fetchMovie(type, series) {
      axios
        .get(`https://api.themoviedb.org/3/${type}/${series}?api_key=${this.apiKey}&language=ko-KR`)
        .then((response) => {
          if (type === "movie" && series === "now_playing") {
            this.movies = response.data.results;
          }
          if (type === "movie" && series === "top_rated") {
            this.popularMovies = response.data.results;
          }
          if (type === "tv" && series === "top_rated") {
            this.popularTvSeries = response.data.results;
          }
          if (type === "tv" && series === "popular") {
            this.OntheAirTvSeries = response.data.results;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    //무비가져오기
    fetchMovies() {
      const movie = "movie";
      const now_playing = `now_playing`;
      const top_rated = `top_rated`;
      const tv = "tv";
      const popular = `popular`;
      this.fetchMovie(movie, now_playing);
      this.fetchMovie(movie, top_rated);
      this.fetchMovie(tv, top_rated);
      this.fetchMovie(tv, popular);
    },

  },
};
</script>

<style  lang="scss" scoped>
html,
body {
  height: 100vh;
  font-family: SeolSans-Medium, sans-serif;
}

main {
  width: 90vw;
  height: 100%;
  background-color: rgb(24, 35, 61);
  padding: 20px;



  // 반응형@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @media (min-width: 350px) and (max-width : 549px) {}

  @media (min-width: 550px) and (max-width : 1023px) {}


}
</style>


