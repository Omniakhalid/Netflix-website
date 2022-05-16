// import "../styles/datatable.css";
// import { DataGrid } from "@mui/x-data-grid";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const rows = [
//   { id: 1312, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2123, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3432, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4589, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 590789, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 670, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 778, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 87, lastName: "Frances", firstName: "Rossini", age: 36 },
// ];

// function Datatableold() {
//   const [data1, setdata1] = useState();

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((results) => setdata1(results.data));
//     // .then((data) => console.log(data1));
//   }, []);

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "firstName", headerName: "First name", width: 130 },
//     { field: "name", headerName: "Last name", width: 130 },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       width: 90,
//     },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//     },
//   ];

//   return (
//     <div className="datatable">
//       <DataGrid
//         rows={data1}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// export default Datatable;
