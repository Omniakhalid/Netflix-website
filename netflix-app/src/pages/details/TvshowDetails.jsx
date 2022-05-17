import ".././../styles/details/TvshowDetails.css";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";
import { Link } from "react-router-dom";
import { tvShows } from "../dummyData";
const TvshowDetails = () => {
  const list = tvShows;
  return (
    <div className="TvshowDetails">
      <Sidebar />
      <div className="TvshowDetailsContainer">
        <Navbar />
        <div className="tvshow">
          <div className="tvshowTitleContainer">
            <h1 className="tvshowTitle">List</h1>
            <Link to="/tvshow/new">
              <button className="tvshowAddButton">Create</button>
            </Link>
          </div>
          <div className="tvshowTop">
            <div className="tvshowTopRight">
              <div className="tvshowInfoTop">
                <span className="tvshowName">{list.title}</span>
              </div>
              <div className="tvshowInfoBottom">
                <div className="tvshowInfoItem">
                  <span className="tvshowInfoKey">id:</span>
                  <span className="tvshowInfoValue">{list._id}</span>
                </div>
                <div className="tvshowInfoItem">
                  <span className="tvshowInfoKey">genre:</span>
                  <span className="tvshowInfoValue">{list.genre}</span>
                </div>
                <div className="tvshowInfoItem">
                  <span className="tvshowInfoKey">type:</span>
                  <span className="tvshowInfoValue">{list.type}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tvshowBottom">
            <form className="tvshowForm">
              <div className="tvshowFormLeft">
                <label>List Title</label>
                <input type="text" placeholder={list.title} />
                <label>Type</label>
                <input type="text" placeholder={list.type} />
                <label>Genre</label>
                <input type="text" placeholder={list.genre} />
              </div>
              <div className="tvshowFormRight">
                <button className="tvshowButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvshowDetails;
