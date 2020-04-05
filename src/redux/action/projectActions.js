import axios from "axios";

import * as actionTypes from "./types";

export const getProject =(projectId)=> async (dispatch)=>{
  try {

    const res = await axios.get(`http://127.0.0.1:8080/api/project/${projectId}`);

    dispatch({
      type : actionTypes.GET_PROJECT , 
      payload :res.data
    })

  } 
  catch(err){
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response,
    })
  }
}
export const updateProject = (project, id,history) => async (dispatch) => {
  try {
    await axios.put(`http://127.0.0.1:8080/api/project/${id}`, project);

    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response.data,
    });
  } 
};




export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("http://127.0.0.1:8080/api/project", project);

    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response.data,
    });
  } 
};

export const getProjects =()=> async (dispatch)=>{
  try {

    const res = await axios.get("http://127.0.0.1:8080/api/project/all");

    dispatch({
      type : actionTypes.GET_PROJECTS , 
      payload :res.data
    })

  } 
  catch(err){
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response,
    })
  }
}



export const deleteProject =(projectId)=> async (dispatch)=>{
  try {

    const res = await axios.delete(`http://127.0.0.1:8080/api/project/${projectId}`);


  } 
  catch(err){
    dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response,
    })
  }
}
