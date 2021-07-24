import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '@Reducer';
import promiseMiddleware from './middleware/ApiCalls';

let middleware = [thunk, promiseMiddleware];

const reduxStore= createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
    )
);

export default reduxStore;
