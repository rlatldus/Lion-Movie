<template>
  <div class="moviemodal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <div v-if="movieDetails" class="modal-card_wrap">
        <div class="modal--card-Left" style="max-width:350px;">
          <img :src="getMoviePosterUrl(movieDetails.poster_path)" alt="Movie Poster" class="movieImg"
            style="width: 100%; height:450px" />
        </div>
        <div class="modal--card-Right">
          <h2>{{ movieDetails.title || movieDetails.name }}</h2>
          <p>{{ movieDetails.overview || movieDetails.overview }}</p>
          <p>개봉일: {{ movieDetails.release_date || movieDetails.first_air_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    movieDetails: {
      type: Object,
      required: true
    }
  },

  methods: {
    getMoviePosterUrl(posterPath) {
      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500/${posterPath}`;
      } else {
        return '준비중입니다';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.moviemodal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0;
}

.moviemodal {
  z-index: 9999;
}

.overlay {
  opacity: 0.5;
  background-color: black;
}

.modal-card {
  display: flex;
  border-radius: 10px;
  position: relative;
  max-width: 78%;
  margin: auto;
  margin-top: 5%;
  padding: 20px;
  background-color: white;
  max-height: 90vh;
  opacity: 1;
  overflow: scroll;
}

.modal-card_wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.modal--card-Left {
  flex-grow: 1;
}

.modal--card-Right {
  width: 50%;
  flex-grow: 1;
  padding: 20px;
}

.modal-card::-webkit-scrollbar {
  width: 12px;
  border-radius: 10px;
}

.modal-card::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

.modal-card::-webkit-scrollbar-thumb {
  background-image:
    -webkit-gradient(linear, left bottom, left top, color-stop(.5, var(--primary)), color-stop(1, var(--grey)));
  border-radius: 10px;
}


@media (min-width: 350px) and (max-width : 549px) {
  .mainRandom-movie--txt {
    position: relative;
  }

  .modal-card {
    font-size: 0.9rem;
  }


  @media (min-width: 550px) and (max-width : 1023px) {}
}</style>