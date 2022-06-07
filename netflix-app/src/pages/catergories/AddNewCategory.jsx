import "../../styles/categories/selectSearch.css";
import ".././../styles/lists/MoviesList.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TextField, Button } from "@mui/material";
import SelectSearch, { fuzzySearch } from "react-select-search";

import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
const AddNewCategory = () => {
  const movies = useSelector((state) => state.movies);

  const [category, setCategory] = useState({
    title: "",
    genre: "",
    type: "",
    content: [],
  });
  const handleOptions = (e) => {
    console.log(e);
    setCategory({ ...category, content: e });
  };
  const handleSubmit = () => {
    axios.post("http://localhost:8000/Netflix-API/list", category).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const selection = () => (
    <SelectSearch
      closeOnSelect={false}
      onChange={handleOptions}
      printOptions="on-focus"
      multiple
      search
      filterOptions={fuzzySearch}
      placeholder="Add Movies Into This Category"
      options={movies.map((movie) => ({
        value: movie._id,
        name: movie.title,
      }))}
      value={category.content}
    />
  );
  return (
    <div className="MoviesList">
      <Sidebar></Sidebar>
      <div className="MoviesListContainer">
        <Navbar />
        <div className="moviesList my-3">
          <div className="movieTitle text-bold">Add New Category</div>
          <div className="movieContainer">
            <TextField
              className="my-3"
              fullWidth
              margin="normal"
              label="Title"
              id="fullWidth"
              placeholder="Title"
              value={category.title}
              color="error"
              onChange={(text) => {
                console.log(text.target.value);
                setCategory({ ...category, title: text.target.value });
              }}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Genre"
              id="fullWidth"
              placeholder="Genre"
              color="error"
              value={category.genre}
              onChange={(text) => {
                setCategory({ ...category, genre: text.target.value });
              }}
            />
            <TextField
              className="my-3"
              fullWidth
              margin="dense"
              label="Type"
              id="fullWidth"
              placeholder="Type"
              color="error"
              value={category.type}
              onChange={(text) => {
                setCategory({ ...category, type: text.target.value });
              }}
            />
            <div styles={{ margin: 5, padding: 5 }}>{selection()}</div>
            <div>
              <div className="d-flex justify-content-end">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
