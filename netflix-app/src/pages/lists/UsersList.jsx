import ".././../styles/lists/UserList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers,deleteUser} from '../../redux/actions/usersActions'

 const UserList = () => {
  const data = useSelector(state=>state.users);
  const dispatch=useDispatch();

  useEffect(()=>{
    axios.get("http://localhost:8000/Netflix-API/getAllUsers")
    .then((res)=>{
      dispatch(getAllUsers(res.data.data));
       console.log(data);
    
    });
  
 },[dispatch]);
  
 
  const handleDelete = (id) => {
    
    axios.delete("http://localhost:8000/Netflix-API/deleteUser/" +id)
    .then((res)=>{
      dispatch(deleteUser(id));
      console.log(data);
    });
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
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
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

        <div className="userTitleContainer">
        <Link to="/user/new" replace>
              <button className="userAddButton">Add New User</button>
            </Link>
          
            </div>

        <DataGrid
          rows={data}
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
}
export default UserList;