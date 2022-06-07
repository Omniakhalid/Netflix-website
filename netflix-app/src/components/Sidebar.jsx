import classes from "../styles/Sidebar.module.css";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.side}>
      <div className={classes.top}>
        <span className={classes.logo}>Admin</span>
      </div>
      <hr></hr>
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>Main</p>
          <Link to="/" className="link">
            <li>
              <DashboardIcon className={classes.icon} />
              <span>Dashboard</span>{" "}
            </li>
          </Link>

          <p className={classes.title}>Lists</p>

          <Link to="/users" replace className="link">
            <li>
              <PersonOutlineOutlinedIcon className={classes.icon} />
              <span>Users</span>{" "}
            </li>
          </Link>
          <Link to="/movie" replace className="link">
            <li>
              <SlideshowOutlinedIcon className={classes.icon} />
              <span>Movies</span>{" "}
            </li>
          </Link>

          <Link to="/tvshow" replace className="link">
            <li>
              <ConnectedTvOutlinedIcon className={classes.icon} />
              <span>TV Shows</span>{" "}
            </li>
          </Link>

           <Link to="/categories" replace className="link">
            <li>
              <ConnectedTvOutlinedIcon className={classes.icon} />
              <span>Categories</span>{" "}
            </li>
          </Link>

          <p className={classes.title}>User</p>
          <Link to="/adminprofile" replace className="link">
            <li>
              <AccountCircleOutlinedIcon className={classes.icon} />
              <span>Profile</span>{" "}
            </li>
          </Link>
          <Link to="/login" replace className="link">
            <li>
              <LogoutOutlinedIcon className={classes.icon} />
              <span>Logout</span>{" "}
            </li>
          </Link>
        </ul>
      </div>
      <p className={classes.title}>Theme</p>

      <div className={classes.bottom}>
        <div className={classes.colorOption}></div>
        <div className={classes.colorOption}></div>
      </div>
    </div>
  );
};

export default Sidebar;
