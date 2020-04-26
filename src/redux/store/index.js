/**
 * @description 创建 store
 */
import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const Store = createStore(reducer, enhancer);

export default Store
