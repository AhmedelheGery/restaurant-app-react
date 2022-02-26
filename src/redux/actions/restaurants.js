import axios from "axios";
import {types} from './types';

export const getRestaurants = () => {
  return (dispatch) => {
    dispatch({ type: types.GET_RESTAURANTS });
    return axios.get("data.json").then(
      (restaurants) => dispatch({ type: types.GET_RESTAURANTS_SUCCESS, payload:restaurants.data }),
      (err) => dispatch({ type: types.GET_RESTAURANTS_FAILURE, payload:err })
    );
  };
};
