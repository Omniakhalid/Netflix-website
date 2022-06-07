import * as actionTypes from "../actionTypes";
const initState = null;
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_MOVIES:
      return payload;

    default:
      return state;
  }
};
export default reducer;