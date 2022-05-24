import { GET_ALL_MOVIES} from '../actionTypes'

export const getAllMovies=(movies)=>({
    type : GET_ALL_MOVIES ,
    payload: movies
    
 });