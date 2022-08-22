import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './Reducer/reducer';

import rootSaga from './Saga/rootSaga';
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
 const store = createStore(reducer,applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)
export{store}