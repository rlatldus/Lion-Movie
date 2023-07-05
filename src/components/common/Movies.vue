<template>
  <main id="Home-page">
    <MovieModal v-if="isModalViewed" :movieDetails="selectedMovieDetails" @close-modal="isModalViewed = false">
		</MovieModal>
    <SeriesModal v-if="isModalViewedSeries" :seriesDetails="selectedTvDetails" @close-modal="isModalViewedSeries = false">
		</SeriesModal>
    <div class="movieListWrap">
      <h1>{{title}}</h1>
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
       >
        <SwiperSlide v-for="movie in  movies" :key="movie.id" class="movieList_li">
          <button @click="fetchMovieDetails(movie,`${type}`)">
            <img :src="`${baseImageUrl}${movie. poster_path}`" alt="Movie Poster" class="movieImg" />
          </button>
          <favorites :items="movies"  :item="movie"/>
        </SwiperSlide>
      </swiper>
    </div>
</main>

</template>

<script>
import axios from 'axios';
import MovieModal from './MovieModal.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import favorites from './Favorites.vue';
// import 'swiper/css/scrollbar';
// import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.min.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default {
  name: 'Home',
  components: {
    MovieModal,
    Swiper,
    SwiperSlide,
    favorites
  },
  data() {
    return{
      movieDetails: {},
      isModalViewed: false,
			isModalViewedSeries: false,
      selectedMovieDetails: null,
      selectedTvDetails:null,
    }
  },
  setup() {
      return {
        modules: [ Pagination, Navigation]
      };
    },
  props: {
    title: {
      type: String,
      required: true,
    },
    movies: {
      type: Array,
      required: true,
    },
    baseImageUrl: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  //디테일무비
  methods: {
		fetchMovieDetails(movie,type){
			const movieId = movie.id;
			const detailsApiUrl = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${this.apiKey}&language=ko-KR`;
			axios.get(detailsApiUrl)
        .then(response => {
					this.selectedMovieDetails = response.data;
					this.isModalViewed = true;
          console.log(response.data,"sss")
        })
        .catch(error => {
          console.error(error);
        });
		},
  },
}
</script>

<style  lang="scss" scoped>
  .swiper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }

    .swiper-slide {
      text-align: center;
      display: flex;
      height: 100%;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit:cover;
    }  
    .swiper-horizontal.swiper-horizontal{
      padding-bottom: 40px;
      
    }

</style>


