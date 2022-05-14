//import classes from "../styles/home.module.css";
import Home from "../pages/Home"
import Users from "../pages/Users";
import NotFound from "../pages/NotFound"
import ViewUser from "../pages/ViewUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="users">
          <Route index element={<Users/>}/>
          <Route path=":userId" element={<ViewUser/>}></Route>
         
        </Route>
        
        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
