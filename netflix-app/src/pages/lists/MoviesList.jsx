import ".././../styles/lists/MoviesList.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { moviesRows } from "../dummyData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const MoviesList = () => {
  const [movies, setmovies] = useState(moviesRows);
  const handleDelete = (id) => {
    setmovies(movies.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="movieListItem">
            <img className="movieListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
            >
              <button className="movieListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="movieListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="MoviesList">
      <Sidebar />
      <div className="MoviesListContainer">
        <Navbar />
        <div className="movieList">
          <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
