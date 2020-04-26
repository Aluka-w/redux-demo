# Redux

## redux

1. `yarn add redux`

2. demo: redux-store

3. redux 流程图

    <img src='./image/redux.png' style="width: 60%" alt="redux图例">

4. redux 三大原则

   1. store 唯一
   2. store 只能由 store 更新, reducer 返回新的 state, store 接受, 然后自我更新
   3. reduce 必须纯函数

5. redux 常用 api

   1. store.subscribe(fn): 发布订阅, store 更改, 执行 fn
   2. store.getState(): 获取 store 数据
   3. store.dispatch(action): 派发 action 到 reducer, 然后更新 store 的值

### Redux DevTools Extension

1. 目的: 方便回溯数据的流向, redux 中间件

2. 使用:

   ```js
   // store - index.js
   import { createStore, applyMiddleware, compose } from 'redux'
   import reducer from './reducer'
   import thunk from 'redux-thunk'

   const composeEnhancers =
     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
       : compose

   const enhancer = composeEnhancers(applyMiddleware(thunk))
   const Store = createStore(reducer, enhancer)
   ```

3. 图例

    <img src='./image/devtools.png' style="width: 60%" alt="DevTools">

> DevTools 配置: `https://github.com/zalmoxisus/redux-devtools-extension`

### redux-thunk

1. 目的: 简单的处理异步请求, redux 中间件

2. 原理: dispatch 一个函数, reducer 检测到是函数时, 先执行函数之后才真正的 dispatch 对象

3. 局限: 破坏了 reducer 处理纯函数的原则

4. 代码:

   ```js
   // actionCreator 直接返回函数
   export const getList = () => {
     return (dispatch) => {
       axios.get('/api/list.json').then((res) => {
         const data = res.data
         const action = initDataAction(data)
         dispatch(action)
       })
     }
   }
   ```
