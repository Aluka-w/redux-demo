import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import LogoIcon from './LogoIcon'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
  SearchOutlined,
  FontColorsOutlined,
  EditOutlined,
} from '@ant-design/icons'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  NavSearchWrapper,
  Addition,
  Button,
} from './style'

export const Header = (props) => {
  const { focused } = props
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
        <NavItem className="right">登录</NavItem>
        <NavSearchWrapper>
          <CSSTransition in={focused} timeout={300} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={props.handleFocus}
              onBlur={props.handleBlur}
            ></NavSearch>
          </CSSTransition>
          <SearchOutlined
            className={focused ? 'focused zoom' : 'zoom'}
            style={{ fontSize: 15 }}
          />
        </NavSearchWrapper>
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
}

const mapStateToProps = (state) => ({
  focused: state.header.focused
})

const mapDispatchToProps = dispatch => ({
  handleFocus: () => {
    dispatch(actionCreator.searchFocusAction())
  },
  handleBlur: () => {
    dispatch(actionCreator.searchBlurAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
