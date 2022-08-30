import { useState} from "react";
import ConfirmDeletePopup from "../ConfirmModal";
import {
  Item,
  ImageItem,
  Icon,
  ListItem,
  ImageWrapper,
  InforItem,
  DetailInfor,
} from "./style";
import Modal from "../Modal";
import Button from "../Button";

const ListInfor = ({ onDelete, users, onUpdate }) => {
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null);
  const [selectedDelUserId, setSelectedDelUserId] = useState(null);

  // Show DeleteModal
  const handleOpen = (id) => {
    setSelectedDelUserId(id);
  };
  // Close Modal
  const handleClose = () => {
    setSelectedUpdateUserId(null);
    setSelectedDelUserId(null);
  };
  // Delete users
  const handleDelete = () => {
    onDelete(selectedDelUserId);
    setSelectedDelUserId(null);
  };
  // Update user
  const handleUpdate = (user) => {
    onUpdate(user);
  };
  return (
    <ListItem>
      {users.map((user) => (
        <Item key={user.id}>
          <ImageWrapper>
            <ImageItem src={user.image} />
          </ImageWrapper>
          <InforItem>
            <DetailInfor>Username: {user.name} </DetailInfor>
            <DetailInfor>Phone: {user.phone}</DetailInfor>
            <DetailInfor>Email: {user.email}</DetailInfor>
            <DetailInfor>Address: {user.address}</DetailInfor>
            <Icon>
              <Button
                className="edit"
                icon="fas fa-edit"
                onClicked={() => setSelectedUpdateUserId(user)}
              ></Button>
              <Button
                onClicked={() => handleOpen(user.id)}
                className="delete"
                icon="fas fa-trash-alt"
              ></Button>
            </Icon>
          </InforItem>
        </Item>
      ))}
      
      {/* show update popup */}
      {!!selectedUpdateUserId && (
        <Modal
          text="Edit Users"
          defaultValue={selectedUpdateUserId}
          OnIsUpdate={handleUpdate}
          onCloseModal={handleClose}
        />
      )}

      {/* show delete popup */}
      {!!selectedDelUserId && (
        <ConfirmDeletePopup onDel={handleDelete} onCloseModal={handleClose} />
      )}
    </ListItem>
  );
}
export default ListInfor;
