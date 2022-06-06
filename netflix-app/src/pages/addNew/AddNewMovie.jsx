import { useState, React } from "react";
import ".././../styles/addNew/AddNewMovie.css";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import axios from "axios";

import { useDispatch } from "react-redux";
import { createMovie } from "../../redux/actions/movieAction";

const AddNewMovie = () => {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState(null);

  const [image, setImg] = useState();
  const [title, setTitle] = useState();
  const [thumbnail, setImgSm] = useState();
  const [description, setDescrption] = useState();
  const [video, setVideo] = useState();
  const [category, setCategory] = useState();
  const [year, setYear] = useState();
  const [duration, setDuration] = useState();

  //const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/Netflix-API/addMovie", {
        title,
        description,
        image,
        thumbnail,
        video,
        year,
        duration,
        category,
      })
      .then(() => {
        console.log("updaaaaaate");
        dispatch(
          createMovie({
            title,
            description,
            image,
            thumbnail,
            video,
            year,
            duration,
            category,
          })
        );
        console.log("updaaaaaat222e");
      });
  };

  return (
    <div className="AddNewMovie">
      <Sidebar />
      <div className="AddNewMovieContainer">
        <Navbar />
        <div className="newMovie">
          <h1 className="addMovieTitle">New Movie</h1>
          <form className="addMovieForm">
            <div className="addMovieItem">
              <label>Image</label>
              <input
                type="text"
                placeholder="Img"
                id="img"
                name="img"
                onChange={(e) => setImg(e.target.value)}
              />
            </div>

            <div className="addMovieItem">
              <label>Thumbnail image</label>
              <input
                type="text"
                placeholder="Image"
                id="imgSm"
                name="imgSm"
                onChange={(e) => setImgSm(e.target.value)}
              />
            </div>
            <div className="addMovieItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="addMovieItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                onChange={(e) => setDescrption(e.target.value)}
              />
            </div>
            <div className="addMovieItem">
              <label>Year</label>
              <input
                type="text"
                placeholder="Year"
                name="year"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="addMovieItem">
              <label>Category</label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="addMovieItem">
              <label>Duration</label>
              <input
                type="text"
                placeholder="Duration"
                name="duration"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="addMovieItem">
              <label>Video</label>
              <input
                type="text"
                placeholder="video url"
                name="video"
                onChange={(e) => setVideo(e.target.value)}
              />
            </div>

            <button className="addMovieButton" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
