export default {
  state: {
    favorites: JSON.parse(localStorage.getItem("favorite")) || [],
  },
  mutations: {
    ADD_FAVORITE(state, item) {
      state.favorites.push(item);
    },
    REMOVE_FAVORITE(state, item) {
      const index = state.favorites.findIndex((favorite) => favorite.id === item.id);
      if (index > -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
  },
  actions: {
    addFavorite({ commit }, item) {
      alert("찜됐어요");
      commit("ADD_FAVORITE", item);
      const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
      favorites.push(item);
      localStorage.setItem("favorite", JSON.stringify(favorites));
    },

    removeFavorite({ commit }, item) {
      alert("찜해제됐어요");
      commit("REMOVE_FAVORITE", item);
      const favorites = JSON.parse(localStorage.getItem("favorite"));
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    },
  },
};
