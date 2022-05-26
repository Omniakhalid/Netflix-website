
import { GET_ALL_USERS,DELETE_USER,EDITE_USER} from '../actionTypes'

export const getAllUsers=(users)=>({
    type : GET_ALL_USERS ,
    payload: users
    
 });
 export const deleteUser=(_id)=>({
    type : DELETE_USER ,
    payload: _id
    
 });
 export const editUser=(user)=>({
    type : EDITE_USER ,
    payload: user
    
 });