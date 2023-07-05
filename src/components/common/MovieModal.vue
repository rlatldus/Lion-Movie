<template>
  <div class="moviemodal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <div v-if="movieDetails" class="modal-card_wrap">
        <div class="modal--card-Left" style="max-width:350px;">
          <img :src="getMoviePosterUrl(movieDetails.poster_path)" alt="Movie Poster" class="movieImg" style="width: 100%; height:450px"/>
        </div>
        <div class="modal--card-Right">
          <h2>{{ movieDetails.title }}</h2>
          <p>{{ movieDetails.overview }}</p>
          <p>개봉일: {{ movieDetails.release_date }}</p>
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
        return `https://image.tmdb.org/t/p/original/${posterPath}`;
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

.moviemodal{
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
  margin-top: 70px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  opacity: 1;
}

.modal-card_wrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  // border: 1px solid blue;
}

.modal--card-Left{
  flex-grow: 1;
}
.modal--card-Right{
  width: 50%;
  flex-grow: 1;
  padding: 20px;

}

</style>