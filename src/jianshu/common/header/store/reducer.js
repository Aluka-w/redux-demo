import { constants } from './index';
import { fromJS }  from 'immutable'
const defaulState = fromJS({
  focused: false,
  mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
})

const reducer = (prevState = defaulState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return prevState.set('focused', true)
    case constants.SEARCH_BLUR:
      return prevState.set('focused', false)
    case constants.MOUSE_IN:
      return prevState.set('mouseIn', true)
    case constants.MOUSE_OUT:
      return prevState.set('mouseIn', false)
    case constants.CHANGE_LIST:
      return prevState.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.CHANGE_PAGE:
      return prevState.set('page', action.page)
  
    default:
      return prevState
  }
}
export default reducer