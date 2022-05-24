import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import MoviesList from "./../pages/lists/MoviesList";
import UserDetails from "./../pages/details/UserDetails";
import MovieDetails from "./../pages/details/MovieDetails";

import UserList from "../pages/lists/UsersList";
import AddNewMovie from "./../pages/addNew/AddNewMovie";
import TvshowsList from "./../pages/lists/TvshowsList";
import NotFound from "./../pages/NotFound";
import TvshowDetails from "./../pages/details/TvshowDetails";
import AddNewTvshow from "./../pages/addNew/AddNewTvshow";
import {Provider} from 'react-redux';
import store from '../redux/store' 
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserDetails />} />
            </Route>

            <Route path="movie">
              <Route index element={<MoviesList />} />
              <Route path=":movieId" element={<MovieDetails />} />
              <Route path="new" element={<AddNewMovie />} />
            </Route>

            <Route path="tvshow">
              <Route index element={<TvshowsList />} />
              <Route path=":tvshowId" element={<TvshowDetails />} />
              <Route path="new" element={<AddNewTvshow />} />
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
