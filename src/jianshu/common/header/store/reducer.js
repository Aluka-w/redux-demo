import { constants } from './index';
const defaulState = {
  focused: false
}

const reducer = (prevState = defaulState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return { focused: true }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return { focused: false }
  }
  return prevState
}
export default reducer