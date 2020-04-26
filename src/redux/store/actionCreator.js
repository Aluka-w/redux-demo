/**
 * @description action creator 生成action
 */

import * as ActionType from './actionTypes'
import axios from 'axios' 

export const changeValAction = (val) => ({
  type: ActionType.CHANGE_INPUT_VAL,
  val
})

export const addListAction = () => ({
  type: ActionType.ADD_LIST_VAL,
})

export const deleteListAction = (idx) => ({
  type: ActionType.DELETE_LIST_VAL,
  idx
})

const initDataAction = (data) => ({
  type: ActionType.GET_INIT_DATA,
  data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then(res => {
      const data = res.data
      const action = initDataAction(data)
      dispatch(action)
    })
  }
}