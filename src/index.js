import React from "react"
import ReactDOM from "react-dom"
// import App from './react-transition-group' // react-transition-group的demo
// import App from "./redux-thunk/todolist" // redux-thunk demo
// import App from "./redux-saga/todolist" // redux-saga demo
// import TodoList from "./react-redux/TodoList" // react-redux demo
// import Store from './react-redux/store';
// import { Provider } from 'react-redux';
// import "antd/dist/antd.css"


// const App = () => (
//   <Provider store={Store}>
//     <TodoList />
//   </Provider>
// ) 

// 简书项目demo
import "antd/dist/antd.css"
import "./style";
import App from './jianshu/app';

ReactDOM.render(<App />, document.getElementById("root"))
