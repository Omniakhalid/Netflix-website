import ".././../styles/lists/MoviesList.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {getAllMovies,deleteMovie,editMovie} from '../../redux/actions/movieAction'

const MoviesList = () => {
  const movies = useSelector(state=>state.movies);
  const dispatch=useDispatch();

  const handleDelete = (id) => {
    
    axios.delete("http://localhost:8000/Netflix-API/deleteMovie/" +id)
    .then((res)=>{
      dispatch(deleteMovie(id));
      console.log(movies);
    });
  };
  useEffect(()=>{
     axios.get("http://localhost:8000/Netflix-API/allMovies")
     .then((res)=>{
       dispatch(getAllMovies(res.data.data));
       console.log(movies);
     });
   
  },[dispatch]);

  // const handleEdit = (id) => {
    
  //   axios.get("http://localhost:8000/Netflix-API/getMovieById/" +id)
  //   .then((res)=>{
  //     dispatch(editMovie(id));
  //     console.log(movies);
  //   });
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
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
    
    { field: "description", headerName: "Description", width: 240 },
    { field: "year", headerName: "year", width: 120 },
    { field: "duration", headerName: "duration", width: 120 },

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
              <button className="movieListEdit" >Edit</button>
              {/* onClick={() => handleEdit(params.row._id)} */}
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
        
          <div className="movieTitleContainer">
        <Link to="/movie/new" replace>
              <button className="movieAddButton">Add New Movie</button>
            </Link>
          
            </div>
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
