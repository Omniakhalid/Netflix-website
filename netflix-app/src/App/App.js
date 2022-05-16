//import classes from "../styles/home.module.css";
import Home from "../pages/Home";
// import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
// import ViewUser from "../pages/ViewUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./../pages/List";
import New from "./../pages/New";
import Login from "./../pages/Login";
import Single from "./../pages/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="Movie">
              <Route index element={<List />} />
              <Route path=":movieId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="tvshow">
              <Route index element={<List />} />
              <Route path=":tvshowId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
