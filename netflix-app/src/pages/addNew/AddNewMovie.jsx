import { useState, React } from "react";
import ".././../styles/addNew/AddNewMovie.css";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
const AddNewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  //const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  
  const handleUpload = (e) => {
    e.preventDefault();
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createMovie(movie, dispatch);
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
                type="file"
                id="img"
                name="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <div className="addMovieItem">
              <label>Title image</label>
              <input
                type="file"
                id="imgTitle"
                name="imgTitle"
                onChange={(e) => setImgTitle(e.target.files[0])}
              />
            </div>
            <div className="addMovieItem">
              <label>Thumbnail image</label>
              <input
                type="file"
                id="imgSm"
                name="imgSm"
                onChange={(e) => setImgSm(e.target.files[0])}
              />
            </div>
            <div className="addMovieItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Year</label>
              <input
                type="text"
                placeholder="Year"
                name="year"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="Genre"
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Duration</label>
              <input
                type="text"
                placeholder="Duration"
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Limit</label>
              <input
                type="text"
                placeholder="limit"
                name="limit"
                onChange={handleChange}
              />
            </div>
            <div className="addMovieItem">
              <label>Is Series?</label>
              <select name="isSeries" id="isSeries" onChange={handleChange}>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div className="addMovieItem">
              <label>Trailer</label>
              <input
                type="file"
                name="trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
            </div>
            <div className="addMovieItem">
              <label>Video</label>
              <input
                type="file"
                name="video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            {uploaded === 0 ? (
              <button className="addMovieButton" onClick={handleSubmit}>
                Create
              </button>
            ) : (
              <button className="addMovieButton" onClick={handleUpload}>
                Upload
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
