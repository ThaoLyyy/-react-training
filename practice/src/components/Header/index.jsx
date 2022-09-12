import React from 'react'
import { StylePageHeader, StyleContainerHeader, StyleWrapperLogo, StyleUserLogo, StyleTitle } from './style'

const Header = () => {
  return (
    <StylePageHeader>
      <StyleContainerHeader>
        <StyleWrapperLogo>
          <StyleUserLogo src={StyleUserLogo} alt='UserLogo' />
          <StyleTitle>users manager</StyleTitle>
        </StyleWrapperLogo>
      </StyleContainerHeader>
    </StylePageHeader>
  )
}

export default Header
