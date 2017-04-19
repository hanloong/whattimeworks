import { createStore } from "redux";
import reducer from "../reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }),
    1000
  );

  return store;
};
