import { DataGrid } from "@mui/x-data-grid";
import "../styles/datatable.css";
import { userColumns, userRows } from "../App/datatablesource";
import {useEffect,useState} from 'react'
import axios from 'axios'

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  const [data1, setdata1] = useState();

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((results) => setdata1(results.data))
      //  .then((data) => console.log(data1));
    }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "name", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={data1}
        columns={columns.concat(actionColumn)}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
