/**
 * @description redux todolist 文件
 */
import React, { useEffect, useState, useCallback } from 'react'
import { Input, Button, List } from 'antd'
import Store from '../store'
import * as ActionCreator from '../store/actionCreator'
import axios from 'axios'

const useGetData = () => {
  const [list, setList] = useState(Store.getState().list)
  const [val, setVal] = useState(Store.getState().val)

  const handleData = useCallback(() => {
    const data = Store.getState()
    setList([...data.list])
    setVal(data.val)
  }, [])

  useEffect(() => {
    Store.subscribe(handleData)
  }, [handleData])

  return [list, val]
}

function App() {
  const [list, val] = useGetData()

  useEffect(() => {
    Store.dispatch(ActionCreator.getList())
    // axios.get('/api/list.json').then(res => {
    //   console.log(res.data);
    //   if (res.code === 0) {
    //     const data = res.data
    //   }
    // })
  }, [])

  const handleChangeVal = useCallback((e) => {
    const val = e.target.value
    const action = ActionCreator.changeValAction(val)
    Store.dispatch(action)
  }, [])

  const handleSubmit = useCallback(() => {
    const action = ActionCreator.addListAction()
    Store.dispatch(action)
  }, [])

  const handleDelete = useCallback((idx) => {
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
        renderItem={(item, idx) => (
          <List.Item onClick={() => handleDelete(idx)}>{item}</List.Item>
        )}
      />
    </div>
  )
}

export default App
