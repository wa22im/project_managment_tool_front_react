import * as actionTypes from "../action/types";

const initState = {};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
