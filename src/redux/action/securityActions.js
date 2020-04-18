import axios from "axios";
import * as actionTypes from "./types";
import setJWTToken from "../../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser) => async (dispatch) => {
  try {
    await axios.post("/api/users/registre", newUser);

    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const login = (loginuser,his) => async (dispatch) => {
  try {

    // extract token from res.data 
    // store the token in the localStorage 
    // set our token in header 
    // decode token on React
    // dispatch to our securityReducer
    const res = await axios.post("/api/users/login", loginuser);
    const { token } = res.data;

    localStorage.setItem("jwtToken", token);

    setJWTToken(token);

    const decoded = jwt_decode(token);
    his.push("/dashboard")
    dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response.data,
    });
  }
};


export const logout = ()=> dispatch =>{
  localStorage.removeItem("jwtToken")
  setJWTToken(false)
  dispatch({
    type : actionTypes.SET_CURRENT_USER  , 
    payload:{}
  })
}