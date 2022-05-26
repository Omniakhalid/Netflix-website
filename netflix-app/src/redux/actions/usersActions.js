import { GET_ALL_USERS} from '../actionTypes'
import { DELETE_USER} from '../actionTypes'

export const getAllUsers=(users)=>({
    type : GET_ALL_USERS ,
    payload: users
    
 });
 export const deleteUser=(_id)=>({
    type : DELETE_USER ,
    payload: _id
    
 });