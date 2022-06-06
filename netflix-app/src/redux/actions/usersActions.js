
import { GET_ALL_USERS,DELETE_USER,GET_USER} from '../actionTypes'

export const getAllUsers=(users)=>({
    type : GET_ALL_USERS ,
    payload: users
    
 });
 export const deleteUser=(_id)=>({
    type : DELETE_USER ,
    payload: _id
    
 });
 export const getUser=(user)=>({
    type : GET_USER ,
    payload: user
    
 });