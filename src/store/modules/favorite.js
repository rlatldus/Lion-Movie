export default {
  state: {
    favorites: [],
  },
  mutations: {
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },
    ADD_FAVORITE(state, item) {
      state.favorites.push(item);
      localStorage.setItem(`favorite_${this.getters.getUserName}`, JSON.stringify(state.favorites));
    },
    REMOVE_FAVORITE(state, item) {
      const index = state.favorites.findIndex((favorite) => favorite.id === item.id);
      if (index > -1) {
        state.favorites.splice(index, 1);
        localStorage.setItem(`favorite_${this.getters.getUserName}`, JSON.stringify(state.favorites));
      }
    },
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
  },
  actions: {
    initializeFavorites({ commit }) {
      const storedFavorites = localStorage.getItem(`favorite_${this.getters.getUserName}`);
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      commit("SET_FAVORITES", favorites);
    },
    addFavorite({ commit }, item) {
      alert("찜됐어요");
      commit("ADD_FAVORITE", item);
    },
    removeFavorite({ commit }, item) {
      alert("찜해제됐어요");
      commit("REMOVE_FAVORITE", item);
    },
  },
};
