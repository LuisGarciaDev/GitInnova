import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducers }from '../reducers/loginReducers';
import { registerReducers } from '../reducers/registerReducers';
import {candidatosReducers} from '../reducers/candidatosReducers';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    candidatos: candidatosReducers
})

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)