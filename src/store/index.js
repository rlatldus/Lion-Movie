import { createStore } from "vuex";
import userModule from "./modules/user";
import favoriteModule from "./modules/favorite";

export default createStore({
  modules: {
    user: userModule,
    favorite: favoriteModule,
  },
});
