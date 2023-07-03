<template>
	<main id="Home-page">
		<h1>Home</h1>
		<div class="mainRandom-movie"
			:style="{ 'background-image': 'url(' + getMovieMainImage(randomMovie.backdrop_path) + ')' }">
			<!-- 화면 상단 메인 -->
			<div v-if="randomMovie" class="mainRandom-movie--txt">
				<h2>{{ randomMovie.title }}</h2>
				<p>{{ randomMovie.overview }}</p>
				<p>개봉일: {{ randomMovie.release_date }}</p>
			</div>

		</div>

		<!-- 메인 이미지 태그 -->
		<!-- <img :src="getMovieMainImage(randomMovie.backdrop_path)" alt="Movie Poster"> -->

		<!-- 영화카드  -->
		<MovieModal v-if="isModalViewed" :movieDetails="selectedMovieDetails" @close-modal="isModalViewed = false">
		</MovieModal>


		<!-- 영화목록 -->
		<div class="movieListWrap">
			<h1>영화 목록</h1>
			<ul class="movieList_ul">
				<li v-for="movie in movies" :key="movie.id" class="movieList_li">
					<button @click="fetchMovieDetails(movie)" style="background-color: aquamarine;">
						<img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" class="movieImg" />
						<span>{{ movie.title }}</span>
					</button>
				</li>
			</ul>
		</div>






	</main>
</template>

<script>
import axios from 'axios';
import MovieModal from './common/MovieModal.vue';


export default {
	name: 'Home',
	components: {
		MovieModal
	},

	data() {
		return {
			movies: [],
			baseImageUrl: 'https://image.tmdb.org/t/p/original',// TMDB에서 제공하는 기본 이미지 URL
			apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
			movieDetails: {},
			isModalViewed: false,
			selectedMovieDetails: null
		};
	},
	created() {
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

		fetchMovieDetails(movie) {
			const movieId = movie.id;
			const detailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
			console.log(movie)
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
		getMovieOverview(movieId) {
			if (this.movieDetails[movieId]) {
				return this.movieDetails[movieId].overview;
			} else {
				return "준비중입니다"
			}
		},

		getMoviePosterUrl(posterPath) {
			if (posterPath) {
				return `${this.baseImageUrl}/${posterPath}`;
			} else {
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
				const randomIndex = Math.floor(Math.random() * this.movies.length);
				return this.movies[randomIndex];
			} else {
				return null;
			}
		}
	},


};
</script>

<style  lang="scss" scoped>
body {
	height: 100vh;
}

main {
	width: 70vw;
	height: 100%;
	background-color: rgb(40, 65, 91);
	/* border: 2px solid red; */
	padding: 30px;
	overflow: hidden;


	.mainRandom-movie {
		width: 100%;
		background-size: cover;
		// border: 2px solid red;
		height: 500px;
		background: center /cover no-repeat;
		background-position: top;
		position: relative;
		box-sizing: border-box;
	}

	.mainRandom-movie--txt {
		position: absolute;
		top: 40%;
		// border: 1px solid black;
		width: 450px;
		color: var(--primary);
		padding-left: 10px;
	}

	#RandomImg {
		position: relative;
		max-width: 100%;
		max-height: 500px;
		overflow: hidden;
	}

	#RandomImg>img {
		width: 100%;
		height: auto;
	}

	.movieListWrap {
		box-sizing: border-box;
	}

	.movieList_ul {
		display: flex;
		width: 1500px;
		// flex-wrap: wrap;
		// border: 1px solid black; 
		list-style: none;
		text-align: center;
		overflow: scroll;
	}

	.movieList_li {
		flex: 0 0 250px;
		/* 수정된 부분 */
		height: auto;
		/* 수정된 부분 */
		margin: 20px;
		// border: 1px solid red;
	}

	.movieImg {
		width: 100%;
		height: auto;
	}

}
</style>


