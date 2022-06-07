import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import listReducer from "./listReducer";
const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  lists: listReducer,
});

export default rootReducer;
