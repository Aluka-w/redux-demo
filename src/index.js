import React from "react"
import ReactDOM from "react-dom"
// import App from './react-transition-group' // react-transition-group的demo
// import App from "./redux-thunk/todolist" // redux-thunk demo
// import App from "./redux-saga/todolist" // redux-saga demo
import TodoList from "./react-redux/TodoList" // react-redux demo
import Store from './react-redux/store';
import { Provider } from 'react-redux';
import "antd/dist/antd.css"

const App = () => (
  <Provider store={Store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
