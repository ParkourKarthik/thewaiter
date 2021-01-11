import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

const persistedStore = loadState();

const store = createStore(rootReducer, persistedStore);

store.subscribe(
  throttle(() => {
    saveState({
      tables: store.getState().tables,
      orders: store.getState().orders,
      menus: store.getState().menus
    });
  }, 1000)
);

export default store;
