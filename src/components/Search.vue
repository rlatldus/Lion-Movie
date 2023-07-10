<template>
  <main id="Search-page">
    <form @submit.prevent="searchMovies">
      <input
        v-model="title"
        type="text"
        placeholder="제목을 입력하세요"
        class="search--input"
      />
    </form>
    <section>
      <div v-if="searchResults.length" class="Search--wrap">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="mySwiper--search"
        >
          <swiper-slide v-for="movie in searchResults" :key="movie.id" class="swiper-slide--search">
            <div :class="['card', { 'card--flipped': selectedMovie === movie }]">
              <div class="card__front" @click="flipCard(movie)">
                <img
                  :src="getMoviePosterUrl(movie.poster_path)"
                  alt="Movie Poster"
                  class="movieImg--search"
                />
              </div>
              <div class="card__back" @click="flipCard(movie)">
                <h3>{{ movie.title }}</h3>
                <p>{{ movie.overview }}</p>
                <p>개봉일: {{ movie.release_date }}</p>
              </div>
            </div>
            <favorites :items="movies"  :item="movie" class="favorites"/>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import favorites from './common/favorite/Favorites.vue';


export default {
  name: 'Search',
  components: {
    Swiper,
    SwiperSlide,
    favorites,
  },
  setup() {
    return { modules: [EffectCards] };
  },
  data() {
    return {
      title: '',
      searchResults: [],
      selectedMovie: null,
      baseImageUrl: 'https://image.tmdb.org/t/p/w500',
      apiKey: 'b946fe7e58fbad6b579118f99125fb0d',
      movies: [] ,
    };
  },
  methods: {
    searchMovies() {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.title}&language=ko-KR`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.searchResults = data.results;
        })
        .catch((error) => {
          console.error('검색 중 에러 발생:', error);
        });
    },
    flipCard(movie) {
      if (this.selectedMovie === movie) {
        this.selectedMovie = null;
      } else {
        this.selectedMovie = movie;
      }
    },
    getMoviePosterUrl(posterPath) {
      if (posterPath) {
        return this.baseImageUrl + posterPath;
      } else {
        return '기본 이미지 URL 또는 대체 이미지 URL';
      }
    },
  },
};
</script>

<style lang="scss" scoped="scoped">
    main {
        width: 100%;
        height: 100vh;
        background-color: rgb(24, 35, 61);
        overflow: hidden;
        position: relative;

        input[type=text] {
            width: 100%;
            max-height: 50px;
            font-size: 1.7rem;
            padding: 30px 20px;
            margin: 1rem 0;
            box-sizing: border-box;
            border: 3px solid var(--dark);
            -webkit-transition: 0.5s;
            transition: 0.3s;
            outline: none;
            border-radius: 5px;
            background: rgb(129, 129, 129);
            background: linear-gradient(180deg, rgb(145, 144, 144) 0%, rgb(119, 120, 121) 100%);
            color: var(--light);
            font-weight: bold;
        }

        input[type=text]:focus {
            border: 3px solid var(--primary);
        }

        input::placeholder {
            font-weight: bold;
            opacity: 0.5;
            font-size: 1.7rem;
            color: var(--light);
        }

        .Search--wrap{
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .mySwiper--search {
            max-width: 400px;
            height: 625px;
        }

        .swiper-slide--search {
            display: flex;
            padding: 20px;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            background: linear-gradient(180deg, var(--dark) 0%, var(--primary) 100%);

        }
        .movieImg--search {
            width: 100%;
            height: auto;
        }
        .card {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.5s;
            transform-style: preserve-3d;
        }

        .card--flipped {
            transform: rotateY(180deg);
        }

        .card__back,
        .card__front {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }

        .card__front {
            transform: rotateY(0deg);
        }

        .card__back {
            height: 100%;
            display: block;
            transform: rotateY(180deg);
            padding: 20px 0;
        }

        .card__back>p{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space:pre-wrap;
          display: -webkit-box; // 얘네를 추가히준다
          -webkit-line-clamp: 15;
          -webkit-box-orient: vertical;
          margin: 20px 0;
        }
        // 반응형@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @media (min-width: 350px) and (max-width : 549px) {

            input[type=text] {
              margin-top: 25px;
                padding: 15px 20px;
            }
            .Search--wrap{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -45%);
              // margin-bottom: 50px;
            }
            .mySwiper--search {
                margin-top: 20px;
                max-width: 300px;
                max-height: 500px;
                font-size: 0.9rem;
            }

        }
        @media (min-width: 550px) and (max-width : 1023px) {}
    }
</style>