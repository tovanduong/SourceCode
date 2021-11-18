import { createStore, combineReducers, applyMiddleware } from 'redux';
import { staffs } from './staff';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staff : staffs
        }),
        applyMiddleware(thunk, logger)
    ) 
    return store;
}