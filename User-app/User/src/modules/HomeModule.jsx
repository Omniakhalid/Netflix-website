import { React, useEffect } from "react";
import MovieRow from "../components/MovieRow";
import Trail from "../components/Trail";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
const HomeModule = () => {
  const listMovies = useSelector((state) => state.lists);

  return (
    <>
      <Trail />
      {listMovies?.map((c) => (
        <div className="row">
          <div key={c._id}>
            <h1 className="text-light">{c?.title}</h1>
            <MovieRow movies={c?.content} />
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeModule;
