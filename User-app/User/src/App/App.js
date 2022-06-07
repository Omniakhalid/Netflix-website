import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import store from "../redux/store";
import Home from '../pages/Home'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';


function App() {

	return (
		<Provider store={store}>
			{/*<div className="container-fluid movie-app bg-dark">
 			<div id="overlay">
					<Header />
			</div> */}
			<BrowserRouter>
				<Routes>
					<Route path="/movies" element=  {<Home type="Movies" />} />
					<Route path="/tvshow" element={<Home type="Tv Shows" />} />
					<Route path='/' element={<Welcome/>} />
					<Route path='/signin' element={<SignIn/>} />
					<Route path='/signup' element={<SignUp/>} />
					<Route path="/Home"  element={<Home type="" />} />


				</Routes>
			</BrowserRouter>
		</Provider>
	);

}

export default App;
