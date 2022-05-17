// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
// import { DeleteOutline } from "@material-ui/icons";
// import { DataGrid } from "@material-ui/data-grid";
import ".././../styles/lists/UserList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "./../../components/Sidebar";
import Navbar from "./../../components/Navbar";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
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
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Sidebar />
      <div className="userListContainer">
        <Navbar />
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}
