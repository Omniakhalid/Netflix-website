import { GET_ALL_MOVIES,GET_MOVIE,DELETE_MOVIE,UPDATE_MOVIE} from '../actionTypes'



export const getAllMovies=(movies)=>({
    type : GET_ALL_MOVIES ,
    payload: movies
    
 });

 export const deleteMovie=(_id)=>({
    type : DELETE_MOVIE ,
    payload: _id
    
 });
 export const getMovie=(movie)=>({
   type : GET_MOVIE ,
   payload: movie
   
});

export const updateMovie=(id,movie)=>({
   type : UPDATE_MOVIE ,
   payload: {id,movie}
   
});

