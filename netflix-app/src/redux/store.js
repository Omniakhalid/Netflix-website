import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers/rootReducer'

import thunk from 'redux-thunk';



const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDev= process.env.NODE_ENV==='development';
const store= isDev? createStore (rootReducer,composeEnhancers(
    applyMiddleware(thunk)
)):createStore (rootReducer,applyMiddleware(thunk));
export default store;