import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootsaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
/* eslint-disable */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),

);
/* eslint-enable */

sagaMiddleware.run(rootsaga);

export default store;