import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import getAllLists from "../redux/actions/listsActions";
import HomeComponent from "../components/home/Home";
const Home = ({ type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLists(type, ""));
  }, [dispatch, type]);

  return <HomeComponent type={type} />;
};

export default Home;
