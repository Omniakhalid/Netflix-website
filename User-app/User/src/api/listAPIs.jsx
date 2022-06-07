import * as api from "../config/appConfig";
import axios from "axios";

export const fetchList = (type, genere) =>
  axios.get(api.endpoints.getAllLists(type, genere));

export const fetchAllGenres = () => axios.get(api.endpoints.getAllGenres);
