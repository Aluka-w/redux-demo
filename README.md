# Redux

## redux

1. `yarn add redux`

2. demo: redux-store

3. redux 流程图

    <img src='./image/redux.png' alt="redux图例">

4. redux 三大原则

   1. store 唯一
   2. store 只能由 store 更新, reducer 返回新的 state, store 接受, 然后自我更新
   3. reduce 必须纯函数

5. redux 常用api

    1. store.subscribe(fn): 发布订阅, store更改, 执行fn
    2. store.getState(): 获取 store 数据
    3. store.dispatch(action): 派发action到reducer, 然后更新store的值
