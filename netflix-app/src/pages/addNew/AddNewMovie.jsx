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

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("year", year);
    formData.append("duration", duration);
    formData.append("category", category);
    formData.append("video", video);
    axios
      .post("http://localhost:8000/Netflix-API/addMovie", formData)
      .then(() => {
        dispatch(
          createMovie(formData)
        );
      });
  };

  return (
    <div className="AddNewMovie">
      <Sidebar />
      <div className="AddNewMovieContainer">
        <Navbar />
        <div className="newMovie">
          <h1 className="addMovieTitle">New Movie</h1>
          <form className="addMovieForm" enctype="multipart/form-data">
            <div className="addMovieItem">
              <label>Image</label>
              <input
                type="file"
                placeholder="Img"
                id="img"
                name="image"
                onChange={(e) => setImg( e.target.files[0] )}
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
