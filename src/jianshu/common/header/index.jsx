import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import LogoIcon from './LogoIcon'
import { connect } from 'react-redux'
import { actionCreator } from './store'
// import { Link } from 'react-router-dom'
import {
  SearchOutlined,
  FontColorsOutlined,
  EditOutlined,
  RedoOutlined
} from '@ant-design/icons'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style'

export const Header = React.memo((props) => {
  const { focused, list } = props
  const spinIcon = useRef(null);
  
	const getListArea = () => {
		const { focused, list, page, totalPage, mouseIn } = props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={props.handleMouseEnter}
					onMouseLeave={props.handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => props.handleChangePage(page, totalPage, spinIcon)}
						>
              <RedoOutlined ref={spinIcon} className="iconfont spin"/>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
  return (
    <HeaderWrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
          <FontColorsOutlined />
        </NavItem>
        <NavItem className="right">登陆</NavItem>
        {/* {login ? (
          <NavItem onClick={logout} className="right">
            退出
          </NavItem>
        ) : (
          <Link to="/login">
            <NavItem className="right">登陆</NavItem>
          </Link>
        )} */}
        <SearchWrapper>
          <CSSTransition in={focused} timeout={300} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => props.handleFocus(list)}
              onBlur={props.handleBlur}
            ></NavSearch>
          </CSSTransition>
          <SearchOutlined
            className={focused ? 'focused zoom' : 'zoom'}
            style={{ fontSize: 15 }}
          />
          {getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <EditOutlined />
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
})

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  // login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus: (list) => {
    list.size === 0 && dispatch(actionCreator.getSearchList())
    dispatch(actionCreator.searchFocusAction())
  },
  handleBlur: () => {
    dispatch(actionCreator.searchBlurAction())
  },
  handleMouseEnter() {
    dispatch(actionCreator.mouseEnter());
  },
  handleMouseLeave() {
    dispatch(actionCreator.mouseLeave());
  },
  handleChangePage(page, totalPage, spin) {
    spin = spin.current;
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    }else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

    if (page < totalPage) {
      dispatch(actionCreator.changePage(page + 1));
    }else {
      dispatch(actionCreator.changePage(1));
    }
  },
  // logout() {
  //   dispatch(loginActionCreators.logout())
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
