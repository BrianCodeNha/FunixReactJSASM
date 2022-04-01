import { applyMiddleware, combineReducers, createStore } from "redux";
import { createForms } from 'react-redux-form'
import { Dishes } from "./dishes";
import { Comments } from "./comment";
import { Leaders } from "./leader";
import { Promotions } from "./promotion";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
