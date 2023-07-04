<template>
  <main id="Home-page">
		<!-- <input type="text"> -->
    <h1>Home</h1>
    <div class="mainRandom-movie">
      <img :src="getMovieMainImage(randomMovie.backdrop_path)" alt="Movie Poster" class="movieImg" />
      <div v-if="randomMovie" class="mainRandom-movie--txt">
        <h2>{{ randomMovie.title }}</h2>
        <p>{{ randomMovie.overview }}</p>
        <p>개봉일: {{ randomMovie.release_date }}</p>
      </div>
    </div>

    <MovieModal v-if="isModalViewed" :movieDetails="selectedMovieDetails" @close-modal="isModalViewed = false">
		</MovieModal>
    <SeriesModal v-if="isModalViewedSeries" :seriesDetails="selectedTvDetails" @close-modal="isModalViewedSeries = false">
		</SeriesModal>

    <div class="movieListWrap">
			
			<h1>상영 영화</h1>
      <Favorites :item="item"></Favorites>
      <ul class="movieList_ul">
					<!-- <button onclick="" class="btn--next">next</button> -->
					<li v-for="movie in movies" :key="movie.id" class="movieList_li ">
						<button @click="fetchMovieDetails(movie)" >
							<img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" class="movieImg" />
						</button>
          </li>
        </ul>
				<!-- <button onclick="" class="btn--prev">prev</button> -->
    </div>
    <div class="movieListWrap">
      <h1>인기 영화</h1>
      <ul class="movieList_ul">
        <li v-for="movie in popularMovies" :key="movie.id" class="movieList_li ">
          <button @click="fetchMovieDetails(movie)">
            <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" class="movieImg" />
          </button>
        </li>
      </ul>
    </div>
    <div class="movieListWrap">
      <h1>인기 티비시리즈</h1>
      <ul class="movieList_ul">
        <li v-for="series in popularTvSeries" :key="series.id" class="movieList_li">
          <button @click="fetchTvDetails(series)">
            <img :src="getMoviePosterUrl(series.poster_path)" alt="series Poster" class="movieImg" />
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import MovieModal from './common/MovieModal.vue';
import SeriesModal from './common/SeriesModal.vue'
import Favorites from './common/Favorites.vue';
// import VueTinySlider from 'vue-tiny-slider';

export default {
  name: 'Home',
  components: {
    MovieModal,
		SeriesModal,
    Favorites
		// 'tiny-slider' : VueTinySlider,
  },

  data() {
    return {
      movies: [],
      popularMovies: [],
			popularTvSeries: [],
      baseImageUrl: 'https://image.tmdb.org/t/p/original',
      apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
      movieDetails: {},
      seriesDetails:{},
      isModalViewed: false,
			isModalViewedSeries: false,
      selectedMovieDetails: null,
      selectedTvDetails:null,
      randomMovie: null,
    };
  },
  created() {
    this.fetchMovies();
    this.fetchPopularMovies();
    this.fetchRandomMovie();
		this.fetchPopularTvSeries();
  },

  methods: {
    fetchMovies() {
      const moviesApiUrl  = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=ko-KR`;
		
      axios
        .get(moviesApiUrl )
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    fetchPopularMovies() {
      const popularMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=ko-KR`;
      axios
        .get(popularMoviesUrl)
        .then((response) => {
          this.popularMovies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
		
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
		
		fetchPopularTvSeries() {
			const popularTvSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=ko-KR`;
			axios
				.get(popularTvSeriesUrl)
				.then((response) => {
					this.popularTvSeries = response.data.results;
				})
				.catch((error) => {
					console.error(error);
				});
		},

		fetchMovieDetails(movie){
			const movieId = movie.id;
			let detailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=ko-KR`;

			axios.get(detailsApiUrl)
        .then(response => {
          this.movieDetails[movieId] = response.data;
					console.log(this.movieDetails);
					this.selectedMovieDetails = this.movieDetails[movieId];
					this.isModalViewed = true;
        })
        .catch(error => {
          console.error(error);
        });
		},
		getMovieOverview(movieId){
			if(this.movieDetails[movieId]){
				return this.movieDetails[movieId].overview;
			}else{
				return "준비중입니다"
			}

		},

		fetchTvDetails(series){
			const seriesId = series.id;
			let detailsApiUrl = `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${this.apiKey}&language=ko-KR`;

			axios.get(detailsApiUrl)
        .then(response => {
          this.seriesDetails[seriesId] = response.data;
					console.log(this.seriesDetails);
					this.selectedTvDetails = this.seriesDetails[seriesId];
					this.isModalViewedSeries = true;
        })
        .catch(error => {
          console.error(error);
        });
		},
		getMovieOverview(seriesId){
			if(this.seriesDetails[seriesId]){
				return this.seriesDetails[seriesId].overview;
			}else{
				return "준비중입니다"
			}
		},





		// 가져오는 
    getMoviePosterUrl(posterPath) {
      if (posterPath) {
        return this.baseImageUrl + posterPath;
      } else {
        return '준비중입니다';
      }
    },

    getMovieMainImage(backdropPath) {
      if (backdropPath) {
        return this.baseImageUrl + backdropPath;
      } else {
        return '';
      }
    },

  },
};
</script>

<style  lang="scss" scoped>
body{
	height: 100vh;
}
.playingMovie{
 border: 3px solid red;
}

main{
	width: 70vw;
	height: 100%;
	background-color: rgb(40, 65, 91);
	/* border: 2px solid red; */
	padding: 30px;
	overflow: hidden;
	

		.mainRandom-movie{
			width: 100%;
			background-size: cover;
			// border: 2px solid red;
			max-height: 600px;
			background: center /cover no-repeat;
			background-position: top center;
			position: relative;
			box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
		}
    .mainRandom-movie>img{
      width: 100%;
      height: auto;
      opacity: 0.8;
      // max-height: 500px;
    }

		.mainRandom-movie--txt{
			position: absolute;
			top: 40%;
			width: 450px;
			color: var(--primary);
			padding-left: 10px;
			// border: 1px solid black;
		}

		.movieListWrap{
			box-sizing: border-box;
		}

		.movieList_ul{
			display: flex;
			width: 100%;
			// flex-wrap: wrap;
			// border: 1px solid black; 
			list-style: none;
			text-align: center;
			// overflow: scroll;
      
		}

		.movieList_li{
			flex: 0 0 250px; 
  		height: auto; 
			margin: 20px;
			// border: 1px solid red;
		}
		.movieList_li:hover {
			flex: 0 0 260px; 
		}
		
		.movieImg{
			width: 100%;
			height: auto;
		}
		.btn--next{
			border: 1px solid red;
		}
		.btn--prev{
			border: 1px solid red;
		}

    @media (min-width: 350px) and (max-width : 549px) {
      .mainRandom-movie--txt{
        position: relative;
      }

    }
    @media (min-width: 550px) and (max-width : 1023px){}
   

}
</style>


