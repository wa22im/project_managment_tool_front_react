import * as actionTypes from "../action/types";

const initState = {
  projects: [],
  project: {},
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    
    case actionTypes.GET_PROJECT:
      return{
        ...state , 
        project : action.payload
      }

    default:
      return state;
  }
};

export default projectReducer;
