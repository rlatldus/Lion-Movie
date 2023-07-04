<template>
	<main id="Home-page">
		<h1>Home</h1>
			<div class="mainRandom-movie">
				<!-- <h2>메인화면</h2> -->
				<div v-if="randomMovie">

					<div id="RandomImg">
						<img :src="getMovieMainImage(randomMovie.backdrop_path)" alt="Movie Poster">
					</div>	
					<h2>{{ randomMovie.title }}</h2>
					<p>{{ randomMovie.overview }}</p>
					<p>개봉일: {{ randomMovie.release_date }}</p>

				</div>
		</div>
		<div class="movieListWrap">
    <h1>영화 목록</h1>
    <ul class="movieList_ul">
      <li v-for="movie in movies" :key="movie.id" class="movieList_li">
			<img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" class="movieImg"  style="height: 200px;"/>
			<span>{{ movie.title }}</span>
			<button @click="fetchMovieDetails(movie.id)" style="background-color: aquamarine;">자세히 보기</button>
      </li>
    </ul>
  	</div>
	</main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
			baseImageUrl: 'https://image.tmdb.org/t/p/original',// TMDB에서 제공하는 기본 이미지 URL
			apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
			movieDetails: null
		};
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      const mainApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`;

      axios.get(mainApiUrl)
        .then(response => {
          this.movies = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    	},

		fetchMovieDetails(movieId){
			const detailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;

			axios.get(detailsApiUrl)
        .then(response => {
          this.movieDetails = response.data.results;
					console.log(this.movieDetails);
        })
        .catch(error => {
          console.error(error);
        });

		},
		getMoviePosterUrl(posterPath){
			if (posterPath){
				return `${this.baseImageUrl}/${posterPath}`;
			}else {
				// 포스터이미지 없는경우
				return 'placeholder.jpg';
			}
		},
		getMovieMainImage(backdropPath) {
			if (backdropPath) {
				return `${this.baseImageUrl}/${backdropPath}`;
			} else {
				// 메인이미지 없는경우
				return 'placeholder.jpg';
			}
		},
	},
		computed: {
			randomMovie() {
			if (this.movies.length > 0) {
				const randomIndex = Math.floor(Math.random()*this.movies.length);
				return this.movies[randomIndex];
			}else{
				return null;
			}
		}
	}
	
};
</script>

<style scoped>

main{
	width: 70%;
	height: 100%;
	background-color: rgb(40, 65, 91);
	/* border: 2px solid red; */
	padding: 30px;

	.mainRandom-movie{
		background-color: aquamarine;
	}

	/* 여기서부터!!!!! */
	#RandomImg {
		position: relative;
		width: 100%;
		max-height: 500px;
		overflow: hidden;
		/* border: 8px solid #000; */
	}
	#RandomImg>img{
		width: 100%;
		height: auto;
	}
	
	/* 여기까지!! 근데 다 동일하게 api 이미지들이 부모 요소를 상속 못받아ㅠ_ㅠ */
	.movieList_ul{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		/* border: 1px solid red; */
		margin: 0 auto;
		list-style: none;
		text-align: center;
		/* overflow: scroll; */
	}
	.movieList_li{
		margin: 0 auto;
		width: 200px;
		height: 300px;
		padding: 10px;
		/* border: 1px solid blue; */
	}
	.movieImg{
		width: 100%;
		height: auto;
	}
	
	button {
		background-color: aquamarine;
		border: 1px solid red;
	}

}
</style>


