import { combineReducers, createStore } from "redux";
import { Dishes } from './dishes'
import { Comments } from './comment'
import { Leaders } from './leader'
import { Promotions } from './promotion'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
    }))

    return store;
}