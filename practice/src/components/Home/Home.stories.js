import React from 'react'
import Home from '.'
import Search from '../Search'
import Sidebar from '../Sidebar'
import Users from '../Users'
import { Line, Wrapper } from './style'

export default {
    title: 'Components/Home',
    component: Home,
}

export const Default = () =>{
  return (
    <Wrapper>
      <Sidebar />
      <Search />
      <Line>List Item User</Line>
      <Users />
    </Wrapper>
  )
}
