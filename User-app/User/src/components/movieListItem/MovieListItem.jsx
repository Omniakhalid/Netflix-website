import { PlayArrow, Pause, Info } from "@material-ui/icons";
import { React, useState, useRef } from "react";
import "./movieListItem.css";
const MovieListItem = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [playBtn, setPlayBtn] = useState(true);
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
    setPlayBtn(!playBtn);
  };
  const handlePause = () => {
    setPlayBtn(!playBtn);
    videoRef.current.pause();
  };
  const handleToggle = () => (playBtn ? handlePause() : handlePlay());
  return (
    <>
      <div
        className="listItem"
        style={{ left: isHovered && index * 255 - 50 + index * 2.5 + 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.image} alt={movie?.title} />
        {isHovered && (
          <>
            <video autoPlay={true} loop className="video" ref={videoRef}>
              <source src="Trailer.mp4" type="video/mp4" />
            </video>
            <div className="itemInfo">
              <div className="icons" onClick={handleToggle}>
                {playBtn ? (
                  <Pause className="icon" />
                ) : (
                  <PlayArrow className="icon" />
                )}
                <Info className="icon" />
              </div>

              <div className="itemInfoTop">
                <span>{" 1 hour and 40 Mins"}</span>
                <span>{movie.year ?? "  2022 "}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div>{movie.category}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieListItem;
