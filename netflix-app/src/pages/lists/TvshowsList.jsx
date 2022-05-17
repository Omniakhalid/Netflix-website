import ".././../styles/lists/TvshowsList.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { tvShows } from "./../dummyData";
const TvshowsList = () => {
  const movies = tvShows;
  // const { lists, dispatch } = useContext(ListContext);

  // useEffect(() => {
  //   getLists(dispatch);
  // }, [dispatch]);

  const handleDelete = (id) => {
    //deleteList(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/tvshow/" + params.row._id, list: params.row }}
            >
              <button className="tvshowListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="tvshowListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="TvshowList">
      <Sidebar />
      <div className="TvshowListContainer">
        <Navbar />
        <div className="tvshowList">
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

export default TvshowsList;
