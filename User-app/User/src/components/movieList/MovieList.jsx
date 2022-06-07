import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { React, useRef, useState } from "react";
import MovieListItem from "../movieListItem/MovieListItem";
import styles from "./movieList.module.css";
const MovieList = ({ movies,title }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };
  return (
    <div className={styles.list}>
      <span className={styles.listTitle}> {title} </span>
      <div className={styles.wrapper}>
        <ArrowBackIosOutlined
          className={styles.sliderArrowLeft}
          onClick={() => handleClick("left")}
        />
        <div className={styles.container} ref={listRef}>
          {movies.map((movie,i) => (
            <MovieListItem movie={movie} index ={i} key={i}> </MovieListItem>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={styles.sliderArrowRight}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;
