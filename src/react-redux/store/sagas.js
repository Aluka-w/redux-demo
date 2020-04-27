import { put, takeEvery } from 'redux-saga/effects'
import * as actionType from './actionTypes';
import * as actionCreator from './actionCreator';
import axios from 'axios';

function* fetchUser() {
  try {
    const res = yield axios.get('/api/list.json')
    
    const action = actionCreator.initDataAction(res.data)
    yield put(action)
  } catch (e) {
    console.log('错误');
  }
}
function* todoListSaga() {
  yield takeEvery(actionType.GET_INIT, fetchUser)
}

export default todoListSaga
