import { put, takeEvery } from 'redux-saga/effects'
import axios from "axios"
import { GET_INIT,  } from './actionTypes'
import { initDataAction } from './actionCreator'

// generator函数, 处理异步请求, try-catch处理错误请求
function* fetchUser() {
  console.log('监听到了GET_INIT');
  try {
    const res = yield axios.get('/api/list.json')
    const action = initDataAction(res.data)
    yield put(action)
  } catch (e) {
    console.log('请求错误');
  }
}

// takeEvery, 监听GET_INIT动作, 有就执行fetchUser
function* todoListSaga() {
  yield takeEvery(GET_INIT, fetchUser)
}

export default todoListSaga
