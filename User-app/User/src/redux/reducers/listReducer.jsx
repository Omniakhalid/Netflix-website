import * as actionTypes from "../actionTypes";

const listReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_LISTS:
      return payload;
    default:
      return state;
  }
};
export default listReducer;
