<template>
    <div class="movieListWrap">
      <h1>상영 영화</h1>
        <div class="favorite">
            <div v-for="item in items" :key="item.id">
                <img class="img" :src ="`https://image.tmdb.org/t/p/original${item. backdrop_path}`"/>
                {{ item.title}}
                <button @click="toggleFavorite(item)">
                    {{ isFavorite(item) ? '찜 해제' : '찜하기' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, watchEffect } from 'vue';
import axios from 'axios';
export default {

    setup() {


        const store = useStore();
        const items = ref([]);

        const isFavorite = (item) => {
            const favorites = store.getters.getFavorites;
            return favorites.some((favorite) => favorite.id === item.id);
        };

        const toggleFavorite = (item) => {
            if (isFavorite(item)) {
                store.dispatch('removeFavorite', item);
            } else {
                store.dispatch('addFavorite', item);
            }
            console.log(store)
        };

        axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=b946fe7e58fbad6b579118f99125fb0d&language=ko-KR` )
        .then((response) => {
          console.log(response.data.results,"sss")
          items.value = response.data.results
        })
        .catch((error) => {
          console.error(error);
        })

        watchEffect(() => {
            items.value.forEach((item) => {
                item.isFavorite = isFavorite(item);
            });
        });

        return {
            items,
            toggleFavorite,
            isFavorite
        };
    }
};
</script>
<style scoped>
.favorite{
    display: flex;
}

.movieListWrap{
      padding-bottom: 20px;
      display: flex;


		}
        .img{
        width: 100px;
      }


</style>
