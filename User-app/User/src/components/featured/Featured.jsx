import { React, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./featured.module.css";
import { InfoOutlined, PlayArrow, Pause } from "@material-ui/icons";
import getAllGeneres from "../../redux/actions/genreActions";
import Categories from "./Categories";
const Featured = ({ type, movie }) => {
  const dispatch = useDispatch();
  const [playBtn, setPlayBtn] = useState(false);
  const videoRef = useRef();
  useEffect(() => {
    console.log(type);
    dispatch(getAllGeneres());
  }, [dispatch, type]);

  const handlePlay = () => {
    videoRef.current.play();
    setPlayBtn(!playBtn);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setPlayBtn(!playBtn);

    // show overlay play button styles, set by 'video__play-button'
  };
  const handleToggle = () => (playBtn ? handlePause() : handlePlay());
  return (
    <div className={styles.featured}>
      <div>
        <Categories type={type} />
      </div>

      {/* <source src={movie?.video || "Trail.mp4"} type="video/mp4" /> */}
      <video
        autoPlay={false}
        ref={videoRef}
        loop
        className={styles?.featuredImg}
      >
        <source src="Trailer.mp4" type="video/mp4" />
      </video>

      <div className={styles?.info}>
        <div className={styles?.movieHeader}>
          <h1> {movie?.title || "Movie Title"}</h1>
        </div>

        <span className={styles.desc}>{movie?.description}</span>
        <div className={styles?.buttons}>
          <button className={styles?.playbtn} onClick={handleToggle}>
            {playBtn ? <Pause /> : <PlayArrow />}
            <span className={styles.spanbtn}>
              {" "}
              {playBtn ? "Pause" : "Play"}
            </span>
          </button>
          <button className={styles?.infobtn}>
            <InfoOutlined />
            <span className={styles.spanbtn}>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
