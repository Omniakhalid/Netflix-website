import { ArrowDropDown, Search, Notifications } from "@material-ui/icons";
import { React, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className="d-flex flex-row flex-start">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NetflixLogo"
            className={styles.logoImg}
          />
          <Link to="/" className={`col-2 text-light ${styles.navItem}`}>
            {" "}
            Home{" "}
          </Link>
          <Link to="/movies" className={`col-2 text-light ${styles.navItem}`}>
            {" "}
            Movie{" "}
          </Link>

          <Link to="/tvshow" className={`col-3 text-light ${styles.navItem}`}>
            {" "}
            TV Shows
          </Link>
        </div>
        <div className="d-flex flex-row p-3">
          <Search className={styles.icon} />
          <Notifications className={styles.icon} />
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
            className={styles.userImg}
          />
          <div className={styles.profile}>
            <ArrowDropDown className={styles.icon} />
            <div className={styles.options}>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
