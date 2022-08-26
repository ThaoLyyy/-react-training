// import { Button, ButtonWrapper, Content, Modal, ModalWrapper, Title } from "./style";

import {
  Button,
  ButtonWrapper,
  Content,
  Modal,
  ModalWrapper,
  Title,
} from "./style";

const ConfirmModal = ({ onCloseModal, onOK }) => {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure you want to delete users?</Content>
        <ButtonWrapper>
          <Button yes onClick={onOK}>
          Delete
          </Button>
          <Button onClick={onCloseModal}>Cancel</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
};
export default ConfirmModal;
