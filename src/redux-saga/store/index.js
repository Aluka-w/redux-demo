/**
 * @description 创建 store
 */

// redux-saga
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import todoListSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const Store = createStore(reducer, enhancer);

sagaMiddleware.run(todoListSaga)

export default Store
