import { StyleModalWrapper, StyleModal, StyleContent, StyleButtonWrapper, StyleTitle, StyleButton } from './style'

const ConfirmModal = ({ onCloseModal, onDelete }) => {
  return (
    <StyleModalWrapper>
      <StyleModal>
        <StyleTitle>Delete User</StyleTitle>
        <StyleContent>Are you sure delete this users ?</StyleContent>
        <StyleButtonWrapper>
          <StyleButton backgroundColor onClick={onDelete}>
            Delete
          </StyleButton>
          <StyleButton onClick={onCloseModal}>Cancel</StyleButton>
        </StyleButtonWrapper>
      </StyleModal>
    </StyleModalWrapper>
  )
}
export default ConfirmModal
