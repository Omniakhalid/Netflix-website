import { GET_ALL_USERS} from '../actionTypes'
//state =>current data, action => new
 const initialState=[{
    _id: "628a487bec6d96c23ae9523d",
userName: "Nada",
email: "omnia@gmail.com",
password: "$2b$08$7dHKrdc/LQsRf/ro3QsBt.fjCQnhF5ih9OnDs0YJK0Pcs6AU7OBdO",
image: "img link",
phone: 1203563611,
role: "user",
__v: 0,
createdAt: "2022-05-22T14:28:11.424Z",
updatedAt: "2022-05-22T14:28:11.424Z"
  }];
 

export const usersReducer=(state=initialState,{type,payload})=>{
switch (type){
    case GET_ALL_USERS:
    return payload;
    default:
    return state;
}
return //new state
}