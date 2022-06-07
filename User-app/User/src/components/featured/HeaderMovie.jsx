import { React, useEffect } from "react";
import Featured from "./Featured";
const HeaderMovie = ({ movies, type }) => {
  useEffect(() => {
    // console.log(movies, type);
  });
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return <Featured movie={randomMovie} type={type} />;
};

export default HeaderMovie;
