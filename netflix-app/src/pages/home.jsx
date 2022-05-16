import React from "react";
import classes from "../styles/home.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "./../components/Sidebar";
// import Users from "./Users";

const Home = () => {
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.homeContainer}>
        <Navbar></Navbar>
        {/* <Datatable /> */}
      </div>
    </div>
  );
};

export default Home;
