import ".././../styles/details/MovieDetails.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import PublishIcon from "@mui/icons-material/Publish";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, updateMovie } from "../../redux/actions/movieAction";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const params = useParams();

  const idURL = params.movieId;

  const [title, setTitle] = useState(movie.title);
  const [video, setVideo] = useState(movie.video);
  const [year, setYear] = useState(movie.year);
  const [description, setDescription] = useState(movie.description);
  const [image, setImage] = useState(movie.image);
  const [thumbnail, setThumbnail] = useState(movie.thumbnail);
  const [category, setCategory] = useState(movie.category);

  

  useEffect((params) => {
    axios
      .get("http://localhost:8000/Netflix-API/getMovieById/" + idURL)
      .then((res) => {
        dispatch(getMovie(res.data.data));
        console.log(res.data.data);
      });
  }, []);

  const getInputTitle = (event) => {
    setTitle(event.target.value);
  };
  const getInputImage = (event) => {
    setImage(event.target.value);
  };

  const getInputVideo = (event) => {
    setVideo(event.target.value);
  };
  const getInputYear = (event) => {
    setYear(event.target.value);
  };

  const getInputDescription = (event) => {
    setDescription(event.target.value);
    
  };
  const getInputThumbnail = (event) => {
    setThumbnail(event.target.value);
  };
  const getInputCategory = (event) => {
    setCategory(event.target.value);
  };
  {
    /* { title, description, image, thumbnail, video, year, duration } */
  }
  function updateMoviee() {
    axios
      .put("http://localhost:8000/Netflix-API/updateMovie/" + idURL, {
        title,
        video,
       
        description,
        image,
        thumbnail,
        year,
        category
      })
     
      .then((res) => {
        console.log("updaaaaaate");
        dispatch(updateMovie(idURL, {
          title,
          video,
         
          description,
          image,
          thumbnail,
          year,
          category
        }));
        console.log("updaaaaaat222e");
      });
  }

  return (
    <div className="MovieDetails">
      <Sidebar />
      <div className="MovieDetailsContainer">
        <Navbar />
        <div className="movie">
          <div className="movieTitleContainer">
            <h1 className="movieTitle">Movie</h1>
          </div>
          <div className="movieTop">
            <div className="movieTopRight">
              <div className="movieInfoTop">
                <img src={movie.image} alt="" className="movieInfoImg" />
                <span className="movieName">{movie.title}</span>
              </div>
              <div className="movieInfoBottom">
                
                <div className="movieInfoItem">
                  <span className="movieInfoKey">Description</span>
                  <span className="movieInfoValue">{movie.description}</span>
                </div>
                <div className="movieInfoItem">
                  <span className="movieInfoKey">year:</span>
                  <span className="movieInfoValue">{movie.year}</span>
                </div>
                <div className="movieInfoItem">
                  <span className="movieInfoKey">Category:</span>
                  <span className="movieInfoValue">{movie.category}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="movieBottom">
            <form className="movieForm">
              <div className="movieFormLeft">
                <label>Movie Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder={movie.title}
                  onChange={getInputTitle}
                />
                <label>Year</label>
                <input
                  type="text"
                  placeholder={movie.year}
                  onChange={getInputYear}
                />
                <label>Category</label>
                <input
                  type="text"
                  placeholder={movie.category}
                  onChange={getInputCategory}
                />
                
                <label>Description</label>
                <input
                  type="text"
                  placeholder={movie.description}
                  onChange={getInputDescription}
                />
                <label>Video</label>
                <input
                  type="text"
                  placeholder={movie.video}
                  onChange={getInputVideo}
                />
              </div>
              <div className="movieFormRight">
                <div className="movieUpload">
                  <img src={movie.image} alt="" className="movieUploadImg" />
                  <label htmlFor="file">
                    <PublishIcon className="imgUploadicon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="movieButton" onClick={updateMoviee}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
