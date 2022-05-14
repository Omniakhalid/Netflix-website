import classes from "../../styles/Sidebar.module.css"
 import React from 'react';
 import DashboardIcon from '@mui/icons-material/Dashboard'; 
 import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
 import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
 import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
 import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';
 import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

 const Sidebar = () => {
     return (
         <div className={classes.side} >
           <div className={classes.top} >
             <span className={classes.logo}>Admin</span>
             </div> 
             <hr></hr>
             <div className={classes.center} >
             <ul>
                 <p className={classes.title}>Main</p>
                 <li>
                     <DashboardIcon className={classes.icon} />
                     <span>Dashboard</span> </li>
                <p className={classes.title}>Lists</p>
                 
                 <li><PersonOutlineOutlinedIcon className={classes.icon} /><span>Users</span> </li>
                 <li><SlideshowOutlinedIcon className={classes.icon}  /><span>Movies</span> </li>
                 <li><ConnectedTvOutlinedIcon className={classes.icon}  /><span>TV Shows</span> </li>
                 <p className={classes.title}>User</p>
                 <li><AccountCircleOutlinedIcon className={classes.icon}  /><span>Profile</span> </li>
                 <li><LogoutOutlinedIcon className={classes.icon} /><span>Logout</span> </li>
                 
             </ul>
         </div> 
         <p className={classes.title}>Theme</p>

         <div className={classes.bottom} >
             <div className={classes.colorOption}></div>
             <div className={classes.colorOption}></div>
            
             
         </div>
         </div>
     );
 };
 
 export default Sidebar;