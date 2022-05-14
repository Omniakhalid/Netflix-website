import React from 'react';
import classes from "../styles/home.module.css";
import Sidebar from "../components/sidebar/Sidebar"
// import Navbar from "../components/navbar/Navbar"

const Home = () => {
    return (
        <div className={classes.home}>
            <Sidebar />
            <div className={classes.homeContainer}>container</div>

        </div>
    );
};

export default Home