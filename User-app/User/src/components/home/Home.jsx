import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Home.css";
import HeaderMovie from "../featured/HeaderMovie";
import MovieList from "../movieList/MovieList";
import { useSelector } from "react-redux";
const Home = ({ type }) => {
  const moviesList = useSelector((state) => state.lists);
  return (
    <div className="home">
      <Navbar />
      <HeaderMovie
        type={type}
        movies={moviesList?.map((c) => c.content)?.flat(1) ?? []}
      />

      {moviesList?.map((list) => (
        <MovieList movies={list?.content} title={list?.title} />
      ))}
    </div>
  );
};

export default Home;
