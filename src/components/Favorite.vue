<template>
  <div>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="toggleFavorite(product)">
          {{ isFavorite(product) ? '찜 해제' : '찜하기' }}
        </button>
      </li>
    </ul>

    <h2>찜한 상품</h2>
    <ul>
      <li v-for="product in favoriteProducts" :key="product.id">
        {{ product.name }}
        <button @click="toggleFavorite(product)">
          {{ isFavorite(product) ? '찜 해제' : '찜하기' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '상품 1' },
        { id: 2, name: '상품 2' },
        { id: 3, name: '상품 3' },
        // 상품 목록 데이터
      ],
      favoriteProducts: []
    };
  },
  methods: {
    toggleFavorite(product) {
      const index = this.favoriteProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.favoriteProducts.splice(index, 1);
      } else {
        this.favoriteProducts.push(product);
      }
    },
    isFavorite(product) {
      return this.favoriteProducts.some(p => p.id === product.id);
    }
  }
};
</script>
<!-- 
<script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [], // 찜한 항목을 저장하는 배열
  },
  mutations: {
    addToFavorites(state, item) {
      state.favorites.push(item);
    },
    removeFromFavorites(state, item) {
      const index = state.favorites.indexOf(item);
      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  actions: {
    addToFavorites({ commit }, item) {
      commit('addToFavorites', item);
    },
    removeFromFavorites({ commit }, item) {
      commit('removeFromFavorites', item);
    },
  },
  getters: {
    favorites: state => state.favorites,
    isFavorite: state => item => state.favorites.includes(item),
  },
});
</script> -->