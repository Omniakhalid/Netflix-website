import { fetchMovieById, fetchMovies } from "../../api/movieAPIs";
import { GET_ALL_MOVIES, GET_MOVIE_BY_ID } from "../actionTypes";
export const getAllMovies = () => (dispatch) => {
  fetchMovies()?.then((res) => {
    // console.log(res.data);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data?.data,
    });
  });
};

export const getMovieById = (id) => (dispatch) => {
  fetchMovieById(id)?.then((res) => {
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  });
};
