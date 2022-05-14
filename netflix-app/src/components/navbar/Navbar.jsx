import classes from "../../styles/Navbar.module.css";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
         
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <LanguageIcon className={classes.icon}/>
            English
          </div>
          <div className={classes.item}>
            <DarkModeOutlinedIcon className={classes.icon}/>
          </div>
          <div className={classes.item}>
            <FullscreenExitOutlinedIcon className={classes.icon}/>
          </div>
          <div className={classes.item}>
            <NotificationsNoneOutlinedIcon className={classes.icon}/>
            <div className={classes.counter} >1</div>
          </div>
          <div className={classes.item}>
            <ChatBubbleOutlineOutlinedIcon className={classes.icon}/>
            <div className={classes.counter} >2</div>
            
          </div>
          

          <div className={classes.item}>
            <ListOutlinedIcon className={classes.icon}/>
          </div>

          <div className={classes.item}>
           {/* <img src="https://www.pngwing.com/en/free-png-kmjrb"  alt="avatar" */}
          <img src= "../../assets/Images/admin.png" alt="avatar"
          className={classes.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
