/**
 * @description action creator 生成action
 */

import * as ActionType from './actionTypes'

export const changeValAction = (val) => ({
  action: ActionType.CHANGE_INPUT_VAL,
  val
})

export const addListAction = () => ({
  action: ActionType.ADD_LIST_VAL,
})

export const deleteListAction = (idx) => ({
  action: ActionType.DELETE_LIST_VAL,
  idx
})