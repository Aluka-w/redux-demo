import { constants } from './index';
import { fromJS }  from 'immutable'
const defaulState = fromJS({
  focused: false
})

const reducer = (prevState = defaulState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return  prevState.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return prevState.set('focused', false)
  }
  return prevState
}
export default reducer