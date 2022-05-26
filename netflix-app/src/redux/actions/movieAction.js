import { GET_ALL_MOVIES,EDITE_MOVIE,DELETE_MOVIE} from '../actionTypes'



export const getAllMovies=(movies)=>({
    type : GET_ALL_MOVIES ,
    payload: movies
    
 });

 export const deleteMovie=(_id)=>({
    type : DELETE_MOVIE ,
    payload: _id
    
 });
 export const editMovie=(movie)=>({
   type : EDITE_MOVIE ,
   payload: movie
   
});