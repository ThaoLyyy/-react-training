import React from 'react'
import Modal from '.'
import {
  StyleBtnWrapper,
  StyleOverlay,
  StyleButton,
  StyleError,
  StyleFormSubmit,
  StyleInputUser,
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
        <StyleOverlay>
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
        </StyleOverlay>
      </StyleModalWrapper>
    </>
  )
}
