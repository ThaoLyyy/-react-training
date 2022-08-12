import React from 'react'
import Home from '.'
import ListUserInfor from '../../common/ListUserInfor'
import Search from '../Search'
import SideBar from '../SideBar'
import Users from '../Users'
import { Line, Wrapper } from './style'

export default {
    title: 'Components/Home',
    component: Home,
}

export const Default = () =>{
  return (
    <Wrapper>
      <SideBar />
      <Search />
      <Line>List Item User</Line>
      <Users />
      <ListUserInfor />
    </Wrapper>
  )
}
