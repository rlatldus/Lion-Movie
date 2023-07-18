<template>
    <MovieModal v-if="isModalViewed" :movieDetails="selectedMovieDetails" @close-modal="isModalViewed = false"></MovieModal>

    <div class="mainRandom-movie">
        <swiper :freeMode="true" :loop="true" :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="movie in randomMovies" :key="movie.id" class="swiper--random">
                <div @click="fetchMovieDetails(movie)">
                    <img :src="`${baseImageUrl}${movie.backdrop_path}`" alt="Movie Poster" class="movieImg" />
                    <div class="mainRandom-movie--txt">
                        <h2>{{ movie.title }}</h2>
                        <div class="mainRandom-movie--p">
                            <p>{{ movie.overview }}</p>
                            <p>개봉일:
                                {{ movie.release_date }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import axios from 'axios';
import Movies from '../movieList/Movies.vue';
import MovieModal from '../movieList/MovieModal.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    components: {
        Movies,
        MovieModal,
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            baseImageUrl: 'https://image.tmdb.org/t/p/original',
            apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
            randomMovies: [],
            isLoading: false,
            isModalViewed: false,
        };
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation]
        };
    },
    created() {
        this.fetchRandomMovie();
        // this.fetchMovieDetails();
    },

    methods: {
        fetchRandomMovie() {
            const randomMovieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR`;
            axios
                .get(randomMovieUrl)
                .then((response) => {
                    this.randomMovies = response.data.results;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        fetchMovieDetails(movie) {
            const movieId = movie.id;
            const detailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=ko-KR`;
            axios
                .get(detailsApiUrl)
                .then((response) => {
                    this.selectedMovieDetails = response.data;
                    this.isModalViewed = true;
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }
};
</script>
<style lang="scss" scoped="scoped">
body,
html {
    height: 100vh;
    font-family: SeolSans-Medium, sans-serif;
}

.mainRandom-movie {
    width: 100%;
    height: 40vh;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    position: relative;
    transition: all 200ms linear 100ms;
    box-shadow: 0px 0px 15px 0px #FFF;
    border-radius: 15px;
    cursor: pointer;
}

.mainRandom-movie::after {
    content: "";
    width: 100%;
    height: 100%;
    border: 40px solid white;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 15px;
    // border: 4px solid white;
    // transition: opacity 200ms linear 0;
}

.movieImg {
    width: 100%;
    height: auto;
}

button {
    pointer-events: none;
}

.mainRandom-movie--txt {
    position: absolute;
    top: 50%;
    font-size: 0.85rem;
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
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    animation-duration: 4s;
    animation-iteration-count: inherit;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        margin-top: 50%;
        width: 300%;
    }

    to {
        margin-bottom: 100%;
        width: 100%;
    }
}

// 반응형@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@media (min-width: 350px) and (max-width : 549px) {
    .mainRandom-movie {
        height: 20vh;
    }

    .mainRandom-movie--txt {
        left: 2%;
        font-size: 0.8rem;
    }

    .mainRandom-movie--p {
        display: none;
    }

    .movieListWrap>h1 {
        font-size: 0.9rem;
    }
}

@media (min-width: 550px) and (max-width : 1023px) {
    .mainRandom-movie {
        height: 30vh;
    }
}
</style>