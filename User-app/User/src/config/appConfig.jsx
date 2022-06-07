export const URL = "http://localhost:8000/Netflix-API";

export const endpoints = {
  addMovie: `${URL}/addMovie`,
  getAllMovies: `${URL}/allMovies`,
  getMovieById: (id) => `${URL}/getMovieById/${id}`,
  signIn:`${URL}/signIn/`,
  addUser:`${URL}/addUser/`,
  getAllLists: (type = null) => `${URL}/list${type ? "?type=" + type : "?"}`,
  getAllGenres: `${URL}/genres`,
};

export const genreTypes = {
  MOVIES: "Movies",
  SERIES: "Series",
};
