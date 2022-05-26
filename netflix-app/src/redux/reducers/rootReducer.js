import {combineReducers} from 'redux';
import {moviesReducer} from './moviesReducer' ;
import {usersReducer} from './usersReducer';
import {movieReducer} from './movieReducer';
import {userReducer} from './userReducer';


const rootReducer = combineReducers({
    movies:moviesReducer,
    users:usersReducer,
    movie:movieReducer,
    user:userReducer,
    //
});

export default rootReducer;