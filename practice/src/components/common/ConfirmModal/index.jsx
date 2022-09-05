import { StyleModalWrapper, StyleModal, StyleContent, StyleButtonWrapper, StyleTitle, StyleButton } from './style'

const ConfirmModal = ({ onCloseModal, onDel }) => {
  return (
    <StyleModalWrapper>
      <StyleModal>
        <StyleTitle>Delete User</StyleTitle>
        <StyleContent>Are you sure delete this users ?</StyleContent>
        <StyleButtonWrapper>
          <StyleButton yes onClick={onDel}>
            Delete
          </StyleButton>
          <StyleButton onClick={onCloseModal}>Cancel</StyleButton>
        </StyleButtonWrapper>
      </StyleModal>
    </StyleModalWrapper>
  )
}
export default ConfirmModal
