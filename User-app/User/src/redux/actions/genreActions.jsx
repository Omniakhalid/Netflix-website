import { fetchAllGenres } from "../../api/listAPIs";
import { GET_ALL_GENERES } from "../actionTypes";

const getAllGeneres = () => (dispatch) => {
  fetchAllGenres()?.then((res) => {
    // console.log(res);
    dispatch({
      type: GET_ALL_GENERES,
      payload: res.data,
    });
  });
};

export default getAllGeneres;
