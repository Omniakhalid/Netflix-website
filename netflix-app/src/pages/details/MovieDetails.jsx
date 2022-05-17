import ".././../styles/details/MovieDetails.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import { moviesRows } from "../dummyData";
const MovieDetails = () => {
  const movie = moviesRows[1]; // data Should be come from Api to redux or context api then arrive here [Noted by Fahmy]

  return (
    <div className="MovieDetails">
      <Sidebar />
      <div className="MovieDetailsContainer">
        <Navbar />
        <div className="movie">
          <div className="movieTitleContainer">
            <h1 className="movieTitle">Movie</h1>
            <Link to="/movie/new" replace>
              <button className="movieAddButton">Add New Movie</button>
            </Link>
          </div>
          <div className="movieTop">
            <div className="movieTopRight">
              <div className="movieInfoTop">
                <img src={movie.img} alt="" className="movieInfoImg" />
                <span className="movieName">{movie.title}</span>
              </div>
              <div className="movieInfoBottom">
                <div className="movieInfoItem">
                  <span className="movieInfoKey">id:</span>
                  <span className="movieInfoValue">{movie._id}</span>
                </div>
                <div className="movieInfoItem">
                  <span className="movieInfoKey">genre:</span>
                  <span className="movieInfoValue">{movie.genre}</span>
                </div>
                <div className="movieInfoItem">
                  <span className="movieInfoKey">year:</span>
                  <span className="movieInfoValue">{movie.year}</span>
                </div>
                <div className="movieInfoItem">
                  <span className="movieInfoKey">limit:</span>
                  <span className="movieInfoValue">{movie.limit}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="movieBottom">
            <form className="movieForm">
              <div className="movieFormLeft">
                <label>Movie Title</label>
                <input type="text" placeholder={movie.title} />
                <label>Year</label>
                <input type="text" placeholder={movie.year} />
                <label>Genre</label>
                <input type="text" placeholder={movie.genre} />
                <label>Limit</label>
                <input type="text" placeholder={movie.limit} />
                <label>Trailer</label>
                <input type="file" placeholder={movie.trailer} />
                <label>Video</label>
                <input type="file" placeholder={movie.video} />
              </div>
              <div className="movieFormRight">
                <div className="movieUpload">
                  <img src={movie.img} alt="" className="movieUploadImg" />
                  <label for="file">
                    <PublishIcon className="imgUploadicon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="movieButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
