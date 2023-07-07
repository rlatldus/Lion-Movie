<template>
  <main id="Home-page">
    <!-- <h1>Home</h1> -->
    <div class="mainRandom-movie">
      <img v-if="randomMovie" :src="`${baseImageUrl}${randomMovie.backdrop_path}`" alt="Movie Poster" class="movieImg" />
      <div v-if="randomMovie" class="mainRandom-movie--txt">
        <h2>{{ randomMovie.title }}</h2>
        <div class="mainRandom-movie--p">
          <p>{{ randomMovie.overview }}</p>
          <p>개봉일: {{ randomMovie.release_date }}</p>
        </div>
      </div>
    </div>
    <movie-list-wrap
      title="상영 영화"
      :movies="movies"
      :base-image-url="baseImageUrl"
      :apiKey="apiKey"
      type="movie"
    ></movie-list-wrap>

    <movie-list-wrap
      title="인기 영화"
      :movies="popularMovies"
      :base-image-url="baseImageUrl"
      :apiKey="apiKey"
      type="movie"
    ></movie-list-wrap>

    <movie-list-wrap
      title="인기 티비시리즈"
      :movies="popularTvSeries"
      :base-image-url="baseImageUrl"
      :apiKey="apiKey"
      type="tv"
    ></movie-list-wrap>
    

    <movie-list-wrap
      title="현재상영 티비시리즈"
      :movies="OntheAirTvSeries"
      :base-image-url="baseImageUrl"
      :apiKey="apiKey"
      type="tv"
    ></movie-list-wrap>

  </main>
</template>

<script>
import axios from 'axios';
import MovieListWrap from './common/movieList/Movies.vue';

export default {
  name: 'Home',
  components: {
    MovieListWrap,
  },

  data() {
    return {
      movies: [],
      popularMovies: [],
			popularTvSeries: [],
      OntheAirTvSeries:[],
      baseImageUrl: 'https://image.tmdb.org/t/p/original',
      apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
      randomMovie: null,
      isLoading: false,
    };
  },
  created() {
    this.fetchMovies();
    this.fetchRandomMovie();
  },

  methods: {
    fetchMovie(type,series) {
      axios
        .get(  `https://api.themoviedb.org/3/${type}/${series}?api_key=${this.apiKey}&language=ko-KR`)
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

		// 맨 상단 무비
    fetchRandomMovie() {
			const randomMovieUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=ko-KR`;
      axios
			.get(randomMovieUrl)
			.then((response) => {
				const randomIndex = Math.floor(Math.random() * response.data.results.length);
				this.randomMovie = response.data.results[randomIndex];
			})
			.catch((error) => {
				console.error(error);
			});
    },
  },
};
</script>

<style  lang="scss" scoped>
html,
body{
	height: 100vh;
  font-family: SeolSans-Medium,sans-serif;
}

main{
	width: 90vw;
	height: 100%;
	background-color:  rgb(24, 35, 61);
  padding: 20px;
	overflow: hidden;
	

  .mainRandom-movie{
			width: 100%;
			max-height: 400px;
			position: relative;
			box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-wrap:wrap;
      border-radius: 15px;
      position: relative;
      margin-bottom: 10px;
		}
    .mainRandom-movie:hover{
      border-radius: 15px;
      border: 4px solid rgba(255, 255, 255, 0.938);
      transition: border 200ms linear 0s;
      opacity: 1;
    }
    .mainRandom-movie>img{
      width: 100%;
      height: auto;
      opacity: 0.8;
    }

		.mainRandom-movie--txt{
			position: absolute;
			top: 40%;
      font-weight: 900;
			max-width: 450px;
      max-height: 200px;
			color: var(--light);
			padding-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      line-height: 1.2;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 6 ;
      -webkit-box-orient: vertical;
		}

    // 반응형@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media (min-width: 350px) and (max-width : 549px) {
      .mainRandom-movie--txt{
        left: 2%;
        font-size: 0.8rem;
      }
      .mainRandom-movie--p{
        display:none;
      }

      .movieListWrap>h1{
        font-size: 0.9rem;
      }
    }
    @media (min-width: 550px) and (max-width : 1023px){}
   

}
</style>


