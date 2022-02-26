import { combineReducers } from "redux";
import { restaurantsReducer } from "./restaurantsReducer";

export const rootReducers = combineReducers({
    restaurantsReducer,
});

export default rootReducers;
