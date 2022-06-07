import {GET_MOVIE,UPDATE_MOVIE} from '../actionTypes'

 const initialState={
    };

export const movieReducer=(state=initialState,{type,payload})=>{
switch (type){
    case GET_MOVIE:
    return payload;
    //state.filter((item) => item._id === payload);
    
    case  UPDATE_MOVIE :
        state.map((item) =>{
            if( item._id === payload.id)
            return {...item,...payload}
            else return item;
        });
        break;
       
     
        
        default:
        return state;
}
}
// case UPDATE_TUTORIAL:
//     return tutorials.map((tutorial) => 
//     {if (tutorial.id === payload.id) 
//     {return {...tutorial,...payload,};} 
//     else {return tutorial;}});
