import ".././../styles/details/MovieDetails.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { Link } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {useSelector,useDispatch} from 'react-redux';
import {editMovie} from '../../redux/actions/movieAction'


const MovieDetails = () => {
   
 const movie = useSelector(state=>state.movie);
  const dispatch=useDispatch();
  
  const params = useParams();

  const idURL=params.movieId;

  useEffect((params)=>{ 
    axios.get("http://localhost:8000/Netflix-API/getMovieById/"+idURL)
  .then((res)=>{
    dispatch(editMovie(res.data.data));
    console.log(res.data.data);
  });
},[]);
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
                  <img src={movie.image} alt="" className="movieUploadImg" />
                  <label htmlFor="file">
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
