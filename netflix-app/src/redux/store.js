import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import {compose} from 'redux'
import thunk from 'redux-thunk';


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDev= process.env.NODE_ENV==='development';
const store= isDev? createStore (rootReducer,composeEnhancers(
    applyMiddleware(thunk)
)):createStore (rootReducer);
export default store;