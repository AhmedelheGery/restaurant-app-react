import { types } from "../actions/types";

// state
const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};
//Reducer
export function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RESTAURANTS:
      return { ...state, loading: true, error:null };
    case types.GET_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload.brands, loading: false, error:null };
    case types.GET_RESTAURANTS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
