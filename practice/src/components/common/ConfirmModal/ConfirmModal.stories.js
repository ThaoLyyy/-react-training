import React from 'react'
import ConfirmModal from '.'
import { StyleButton, StyleButtonWrapper, StyleContent, StyleModal, StyleModalWrapper, StyleTitle } from './style'

export default {
  title: 'ConfirmModal',
  common: ConfirmModal
}

export const Default = () => {
  return (
    <>
      <StyleModalWrapper>
        <StyleModal>
          <StyleTitle>Delete User</StyleTitle>
          <StyleContent>Are you sure delete this users ?</StyleContent>
          <StyleButtonWrapper>
            <StyleButton>Delete</StyleButton>
            <StyleButton>Cancel</StyleButton>
          </StyleButtonWrapper>
        </StyleModal>
      </StyleModalWrapper>
    </>
  )
}
