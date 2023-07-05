<template>
  <main id="Search-page">
    <form @submit.prevent="searchMovies">
      <input v-model="title" type="text" placeholder="영화검색!!" />
      <button type="submit">검색</button>
    </form>

    <div v-if="searchResults.length">
      <h2>검색 결과</h2>
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
        >
        <!-- style="display:flex; flex-wrap: wrap; list-style: none; background-color: aquamarine;"> -->

      <swiper-slide v-for="movie in searchResults" :key="movie.id" style= "padding: 10px; text-align: center;">
        <button @click="selectMovie(movie)">
          <img :src="getMoviePosterUrl(movie.poster_path)" alt="Movie Poster" class="movieImg" />
          <p>
            {{ movie.title }}
          </p>
        </button>
      </swiper-slide>
    </swiper>
      
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-cards';





// import required modules
import { EffectCards } from 'swiper';

export default {
  name: 'Search',
  components: {
    Swiper,
    SwiperSlide,
  },
  
  setup() {
      return {
        modules: [EffectCards]
      };
    },

  data() {
    return {
      title: '',
      searchResults: [],
      baseImageUrl: 'https://image.tmdb.org/t/p/w300',
      apiKey: 'b946fe7e58fbad6b579118f99125fb0d'
    };
  },
  methods: {
    searchMovies() {
      // 검색 API 호출 및 결과 처리
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.title}&language=ko-KR`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.searchResults = data.results;
        })
        .catch(error => {
          console.error('검색 중 에러 발생:', error);
        });
    },
    selectMovie(movie) {
      // 선택한 영화에 대한 추가 작업 수행
      console.log('선택한 영화:', movie);
      // 영화 모달 열기 등의 동작 수행
    },
    getMoviePosterUrl(posterPath) {
      if (posterPath) {
        return this.baseImageUrl + posterPath;
      } else {
        // 포스터 이미지가 없는 경우 대체 이미지 URL을 반환하거나 기본 이미지를 사용할 수 있습니다.
        return '기본 이미지 URL 또는 대체 이미지 URL';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  position: relative;
}
main{
	width: 70vw;
	height: 100vh;
	background-color: rgb(40, 65, 91);
	padding: 30px;
	overflow: hidden;

  .swiper {
    max-width: 400px;
    max-height: auto;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }

  .swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }

  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }

  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }

  .swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }

  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
  .swiper-slide:nth-child(11n) {
    background-color: rgb(54, 94, 77);
  }
  .swiper-slide:nth-child(12n) {
    background-color: rgb(54, 94, 77);
  }
  .swiper-slide:nth-child(13n) {
    background-color: rgb(54, 94, 77);
  }

}
</style>