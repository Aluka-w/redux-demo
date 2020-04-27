import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'
export const TodoList = (props) => {
  useEffect(() => {
    props.getInitData()
  }, [])
  return (
    <div>
      <input type="text" value={props.val} onChange={props.handleChange}/>
      <button onClick={props.handleSubmit}>提交</button>
      <ul>
        {props.list.map((item, idx) => (
          <li key={idx} onClick={() => props.deleteList(idx)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.list,
  val: state.val,
})

const mapDispatchToProps = (dispatch) => ({
  getInitData: () => {
    const action = actionCreator.getInitAction()
    dispatch(action)
  },
  handleChange: (e) => {
    const val = e.target.value
    const action = actionCreator.changeValAction(val)
    dispatch(action)
  },
  handleSubmit: () => {
    const action = actionCreator.addListAction()
    dispatch(action)
  },
  deleteList: (idx) => {
    const action = actionCreator.deleteListAction(idx)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
