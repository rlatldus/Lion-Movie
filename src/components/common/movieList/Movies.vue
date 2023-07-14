<template>
  <div id="movie-page">
    <MovieModal v-if="isModalViewed" :movieDetails="selectedMovieDetails" @close-modal="isModalViewed = false">
		</MovieModal>
    <div class="movieListWrap">
      <h1>{{title}}</h1>
      <swiper
        :freeMode="true"
        :loop="true"
        :breakpoints=" {
          350: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          549: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
       >
        <SwiperSlide v-for="movie in movies" :key="movie.id" class="movieList_li">
          <div class="slidewrap">
          <button @click="fetchMovieDetails(movie,`${type}`)">
            <img :src="`${baseImageUrl}${movie. poster_path}`" alt="Movie Poster" class="movielistImg"/>
          </button>
        </div>
          <favorites :items="movies"  :item="movie" class="favorites"/>
        </SwiperSlide>
      </swiper>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import MovieModal from './MovieModal.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper';
import favorites from '../favorite/Favorites.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default {
  name: 'Movies',
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
        modules: [ Pagination, Navigation ]
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
        })
        .catch(error => {
          console.error(error);
        });
		},
  },
}
</script>

<style lang="scss">
    .movieListWrap>h1{
        padding: 20px 0;
        color: var(--light);
    }

    .mySwiper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    
    .movieList_li {
      text-align: center;
      display: flex;
      height: 100% calc(-5px);
      position: relative;
      backface-visibility: hidden;
      display: block;
      position: relative;
      overflow: hidden;
      margin-bottom:-1px;
      border-radius: 4px;
      transition: all 200ms linear 100ms;
      box-shadow: rgba(36, 35, 35, 0.69) 0px 26px 30px -10px, rgba(109, 109, 109, 0.73) 0px 16px 10px -10px;
  }

  .movieList_li {
    &:hover{
      border: 4px solid white;
      background-clip: content-box;
      transition: border 200ms linear 0;
      box-shadow: rgba(70, 69, 69, 0.69) 0px 26px 30px -10px, rgba(235, 233, 233, 0.73) 0px 16px 10px -10px;
    }
  }

    .favorites{
      background-color: var(--light);
      position: absolute;
      top:0;
      right:0;
      border-radius: 5px;
    }


    .movielistImg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit:cover;
    }  

    .movielistImg {
      &:hover {
      scale: 1.1;
      transition: all 200ms linear 200ms;
    }
    }

    .swiper-horizontal{
      padding-bottom: 40px;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after{
      color:var(--light)
    }
    
    .swiper-horizontal>
    .swiper-pagination-bullets .swiper-pagination-bullet{
      background-color:var(--light);
    }

    // 반응형@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media (min-width: 350px) and (max-width : 549px) {

      .movieListWrap>h1{
        font-size: 1rem;
      }
      .swiper-button-next:after,
      .swiper-button-prev:after{
        font-size: 1.5rem;
        font-weight: 900;
        display: none;
        // border: 1px solid red;
      }
      .swiper-horizontal>
      .swiper-pagination-bullets .swiper-pagination-bullet{
        // border: 1px solid red;
        display: none;
      }

      .swiper-horizontal{
        padding-bottom: 0;
      }
    }
    @media (min-width: 550px) and (max-width : 1023px){}
  
</style>


