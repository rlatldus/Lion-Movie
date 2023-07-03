import { createStore } from "vuex";
import userModule from "./modules/user";
// import tokenModule from "./modules/token";
import favoriteModule from "./modules/favorite";

export default createStore({
  modules: {
    user: userModule,
    // token: tokenModule,
    favorite: favoriteModule,
  },
});
