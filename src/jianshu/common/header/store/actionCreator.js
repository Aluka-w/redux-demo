import { constants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocusAction = () => ({
  type: constants.SEARCH_FOCUS,
})
export const searchBlurAction = () => ({
  type: constants.SEARCH_BLUR,
})
export const mouseEnter = () => ({
  type: constants.MOUSE_IN,
})
export const mouseLeave = () => ({
  type: constants.MOUSE_OUT,
})

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});
export const getSearchList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})
