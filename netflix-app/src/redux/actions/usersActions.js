import { GET_ALL_USERS} from '../actionTypes'

export const getAllUsers=(users)=>({
    type : GET_ALL_USERS ,
    payload: users
    
 });