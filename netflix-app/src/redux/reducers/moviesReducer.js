import {GET_ALL_MOVIES} from '../actionTypes'
//state =>current data, action => new
 const initialState=[{
    "_id": "628a5d9e4fc1c9b351109589",
    "title": "spiderman",
    "description": "my first movie",
    "image": "img link",
    "thumbnail": "thumb",
    "video": "video link",
    "year": 2021,
    "duration": "2 hours 15 mins",
    "__v": 0,
    "createdAt": "2022-05-22T15:58:22.354Z",
    "updatedAt": "2022-05-22T15:58:22.354Z"
    }];
 

export const moviesReducer=(state=initialState,{type,payload})=>{
switch (type){
    case GET_ALL_MOVIES:
    return payload;
    default:
    return state;
}
return //new state
}