/**
 * @description 创建 reducer
 */

import * as actionType from './actionTypes';
const defaultState = {
  list: [],
  val: ''
}

export default (prevState = defaultState, action) => {
  if (action.type === actionType.GET_INIT_DATA) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.val = action.data.val
    newState.list = [...action.data.list]
    return newState
  }
  if (action.type === actionType.CHANGE_INPUT_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.val = action.val
    return newState
  }
  if (action.type === actionType.ADD_LIST_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list = [...prevState.list, prevState.val]
    newState.val = ""
    return newState
  }
  if (action.type === actionType.DELETE_LIST_VAL) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list.splice(action.idx, 1)
    return newState
  }
  return prevState
}
