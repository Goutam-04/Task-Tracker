import {createStore,combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { todoReducers } from './Reducers/todoReducers';


const reducer = combineReducers({
    todo:todoReducers
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;