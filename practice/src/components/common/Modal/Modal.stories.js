import React from 'react'
import Modal from '.'
import {
  StyleBtnWrapper,
  StyleButton,
  StyleError,
  StyleFormSubmit,
  StyleInputUser,
  StyleModalUser,
  StyleModalWrapper,
  StyleTitle
} from './style'

export default {
  title: 'Modal',
  common: Modal
}

export const Default = () => {
  return (
    <>
      <StyleModalWrapper>
        <StyleModalUser>
          <StyleTitle></StyleTitle>
          <StyleFormSubmit>
            <StyleInputUser />
            <StyleError></StyleError>
            <StyleInputUser />
            <StyleError></StyleError>
            <StyleInputUser />
            <StyleError></StyleError>
            <StyleInputUser />
            <StyleError></StyleError>
            <StyleInputUser />
            <StyleError></StyleError>
            <StyleBtnWrapper>
              <StyleButton>Save Users</StyleButton>
              <StyleButton>Cancel</StyleButton>
            </StyleBtnWrapper>
          </StyleFormSubmit>
        </StyleModalUser>
      </StyleModalWrapper>
    </>
  )
}
