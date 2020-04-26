/**
 * @description 创建 reducer
 */

import * as ActionTypes from './actionTypes'

// 默认值
const defaultStore = {
  list: [],
  val: "",
}

export default (prevState = defaultStore, action) => {
  if (action.type === ActionTypes.CHANGE_INPUT_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.val = action.val
    return newState
  }
  if (action.type === ActionTypes.ADD_LIST_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list = [...prevState.list, prevState.val]
    newState.val = ""
    return newState
  }
  if (action.type === ActionTypes.DELETE_LIST_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list.splice(action.idx, 1)
    return newState
  }
  return prevState
}
