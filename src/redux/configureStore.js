import { applyMiddleware, combineReducers, createStore } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comment";
import { Leaders } from "./leader";
import { Promotions } from "./promotion";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
