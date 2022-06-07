import * as api from "../config/appConfig";
import axios from "axios";



export const fetchMovies = () => axios.get(api.endpoints.getAllMovies);
export const fetchMovieById = (id) => axios.get(api.endpoints.getMovieById(id));
