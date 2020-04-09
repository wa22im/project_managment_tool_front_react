import * as actionTypes from "../action/types";

const initState = {
    project_tasks :[] , 
    project_task : {} , 
}

const backlogReducer  = (state = initState , action) =>{

    switch (action.type) {
        case actionTypes.GET_BACKLOG:
            
            return {
                ...state , 
                project_tasks : action.payload

            }
        case actionTypes.GET_PROJECT_TASK : 
        return{
            ...state , 
            project_task : action.payload
        }
        case actionTypes.DELETE_PROJECT_TASK : 
        return {
            ...state 
            //TO DO 
        }
    
        default:
            return state;
    }
}

export default  backlogReducer 