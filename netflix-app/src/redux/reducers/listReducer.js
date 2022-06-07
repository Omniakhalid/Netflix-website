import {ADD_LIST} from '../actionTypes'

export const moviesReducer=(state=null,{type,payload})=>{
switch (type){
    case ADD_LIST:
        return payload;

    default:
    return state;
}

}