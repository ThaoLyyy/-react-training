import {
  Button,
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
} from "./style";

const ConfirmModal = ({ onCloseModal, onDel }) => {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete User</Title>
        <Content>Are you sure delete this users ?</Content>
        <ButtonWrapper>
          <Button yes onClick={onDel}>
            Delete
          </Button>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
};
export default ConfirmModal;
