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