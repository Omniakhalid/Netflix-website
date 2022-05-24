// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
// import { DeleteOutline } from "@material-ui/icons";
// import { DataGrid } from "@material-ui/data-grid";
import ".././../styles/lists/UserList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers} from '../../redux/actions/usersActions'
export default function UserList() {
  //const [data, setData] = useState(userRows);
  const data = useSelector(state=>state.users);
  const dispatch=useDispatch();

  useEffect(()=>{
    axios.get("http://localhost:8000/Netflix-API/getTest")
    .then((res)=>{
      dispatch(getAllUsers(res.data.data));
       console.log(data);
      //console.log(res.data);
      //setData(res.data.data);
    });
  
 },[]);
  
  const handleDelete = (id) => {
    console.log(id);
    //setData(data.filter((item) => item._id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    {
      field: "userName",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname: "/users/" + params.row._id, user: params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="usersList">
      <Sidebar />
      <div className="userListContainer">
        <Navbar />
        <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          checkboxSelection
          getRowId={(r) => r._id}
        />
        </div>
      </div>
    </div>
  );
}
