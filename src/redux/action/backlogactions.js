import axios from 'axios' 
import * as actionTypes from "./types";

export const addProjectTask = (backlog_id , project_task , history)=> async dispatch=>{

    try{
    await axios.post(`/api/backlog/${backlog_id}`,project_task) ; 
    history.push(`/projectboard/${backlog_id}`)
    }
    catch(err){ 
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data,
          });
    }
}

export const getProjectTasks = (backlog_id )=> async dispatch =>{

    try {

        const res = await axios.get(`/api/backlog/${backlog_id}`)
        dispatch({
            type: actionTypes.GET_BACKLOG , 
            payload : res.data
        })
    }
    catch(err){
        dispatch({
            type :actionTypes.GET_ERRORS  , 
            payload : err.response.data
        })
    }
}

export const updateProjectTask = (backlog_id , projecttaskid, project_task )=> async dispatch=>{

    try{
    await axios.put(`/api/backlog/${backlog_id}/${projecttaskid}`,project_task) ; 
    }
    catch(err){ 
        console.log(err.response.data)
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data.message,
          });
    }
}
export const deleteProjectTask = (backlog_id , projecttaskid, history)=> async dispatch=>{

    try{
   const res= await axios.delete(`/api/backlog/${backlog_id}/${projecttaskid}`) ; 
    history.push(`/projectboard/${backlog_id}`)
    dispatch ({
        type:actionTypes.DELETE_PROJECT_TASK , 
        payload : res.data
    })
    }
    catch(err){ 
       /* console.log(err.response.data)
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data.message,
          });*/
    }
}


export const getProjectTask = (backlog_id , projecttaskid) => async dispatch =>{
    try{
       const res  =  await axios.get(`/api/backlog/${backlog_id}/${projecttaskid}`) ; 
        dispatch ({
            type:actionTypes.GET_PROJECT_TASK , 
            payload : res.data
        })
    }
    catch (err){ 
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err.response.data,
          });
    }
}
