import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './Reducer/Rootreducer';
const sagaMiddleware = createSagaMiddleware
const middleware = [sagaMiddleware]
export const store = createStore(reducer,applyMiddleware(...middleware))