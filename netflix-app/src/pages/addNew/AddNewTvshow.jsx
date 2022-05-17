import { React, useState } from "react";
import ".././../styles/addNew/AddNewTvshow.css";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import { tvShows } from "../dummyData";

const AddNewTvshow = () => {
  const movies = tvShows;
  const [list, setList] = useState(null);
  // const history = useHistory();

  // const { dispatch } = useContext(ListContext);
  // const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  // useEffect(() => {
  //   getMovies(dispatchMovie);
  // }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // createList(list, dispatch);
    // history.push("/lists");
  };

  return (
    <div className="AddNewTvshow">
      <Sidebar />
      <div className="AddNewTvshowContainer">
        <Navbar />
        <div className="newtvshow">
          <h1 className="addtvshowTitle">New TvShow</h1>
          <form className="addtvshowForm">
            <div className="formLeft">
              <div className="addtvshowItem">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="addtvshowItem">
                <label>Genre</label>
                <input
                  type="text"
                  placeholder="Genre"
                  name="genre"
                  onChange={handleChange}
                />
              </div>
              <div className="addtvshowItem">
                <label>Type</label>
                <select name="type" onChange={handleChange}>
                  <option>Type</option>
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                </select>
              </div>
            </div>
            <div className="formRight">
              <div className="addtvshowItem">
                <label>Content</label>
                <select
                  multiple
                  name="content"
                  onChange={handleSelect}
                  style={{ height: "280px" }}
                >
                  {movies.map((movie) => (
                    <option key={movie._id} value={movie._id}>
                      {movie.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="addtvshowButton" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewTvshow;
