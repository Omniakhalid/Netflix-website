import * as actionTypes from "../actionTypes";

const reducer = (state = null, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case actionTypes.GET_ALL_GENERES:
      return payload;
    default:
      return state;
  }
};
export default reducer;
