import React from "react";
import Sidebar from "./../components/Sidebar";
import Navbar from "./../components/Navbar";
import "../styles/single.css";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">INFORMATION</h1>
            <div className="item">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGjUbgWwxw7-g/profile-displayphoto-shrink_800_800/0/1649322747808?e=1658361600&v=beta&t=cfPmTdv7u2cc3W_rSX5o4SdKteYOqH9aOCCdBJXJud4"
                alt="profile img"
                className="itemImg"
              />
              Ditails
            </div>
          </div>
          <div className="Right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
