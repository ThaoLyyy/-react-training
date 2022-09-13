import React from 'react'
import UserItem from '.'
import Button from '../common/Button'
import ConfirmModal from '../common/ConfirmModal'
import Modal from '../common/Modal'
import {
  StyleDetailInfor,
  StyleIcon,
  StyleImageItem,
  StyleImageWrapper,
  StyleInforItem,
  StyleItem,
  StyleListItem
} from './style'

export default {
  title: 'Components/UserItem',
  component: UserItem
}

export const Default = () => {
  return (
    <>
      <StyleListItem>
        <StyleItem>
          <StyleImageWrapper>
            <StyleImageItem />
          </StyleImageWrapper>
          <StyleInforItem>
            <StyleDetailInfor>Username: </StyleDetailInfor>
            <StyleDetailInfor>Phone: </StyleDetailInfor>
            <StyleDetailInfor>Email: </StyleDetailInfor>
            <StyleDetailInfor>Address:</StyleDetailInfor>
            <StyleIcon>
              <Button></Button>
              <Button></Button>
            </StyleIcon>
          </StyleInforItem>
        </StyleItem>
        <Modal />
        <ConfirmModal />
      </StyleListItem>
    </>
  )
}
