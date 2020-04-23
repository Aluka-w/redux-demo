/**
 * @description todolist 文件
 */
import React from "react"
import { Input, Button, List } from "antd"
import Store from "../redux-store"
import * as ActionCreator from '../redux-store/actionCreator'

const useGetData = () => {
  const [list, setList] = React.useState(Store.getState().list)
  const [val, setVal] = React.useState(Store.getState().val)

  const handleData = React.useCallback(() => {
    const data = Store.getState()
    setList([...data.list])
    setVal(data.val)
  }, [])
  Store.subscribe(handleData)
  return [list, val]
}

function App() {
  const [list, val] = useGetData()

  const handleChangeVal = React.useCallback((e) => {
    const val = e.target.value
    const action = ActionCreator.changeValAction(val)
    Store.dispatch(action)
  }, [])

  const handleSubmit = React.useCallback(() => {
    const action = ActionCreator.addListAction()
    Store.dispatch(action)
  }, [])

  const handleDelete = React.useCallback((idx) => {
    const action = ActionCreator.deleteListAction(idx)
    Store.dispatch(action)
  }, [])

  return (
    <div>
      <Input
        value={val}
        onChange={handleChangeVal}
        placeholder="输入"
        style={{ width: 300 }}
      />
      <Button onClick={handleSubmit}>提交</Button>
      <List
        bordered
        dataSource={list}
        style={{ width: 300 }}
        renderItem={(item, idx) => <List.Item onClick={() => handleDelete(idx)}>{item}</List.Item>}
      />
    </div>
  )
}

export default App
