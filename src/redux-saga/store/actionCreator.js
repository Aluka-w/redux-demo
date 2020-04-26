/**
 * @description action creator 生成action
 */

import * as ActionType from './actionTypes'

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

export const initDataAction = (data) => ({
  type: ActionType.GET_INIT_DATA,
  data
})

// redux-saga
export const getDataAction = () => ({
  type: ActionType.GET_INIT,
})