import { useState } from "react";
import Button from "../common/Button";
import ConfirmModal from "../common/ConfirmModal";
import Modal from "../common/Modal";
import {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem ,
  Icon,
  DetailInfor,
} from "./style";

const UserInfor = (users, onUpdate, onDelete) => {
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null);
  const [selectedDelUser, setSelectedDelUserId] = useState(null);
 
  /** close mode user */ 
  const handleClose = () => {
    setSelectedUpdateUserId(null);
  };
  
  /** update user */ 
  const handleUpdate = (user) => {
    onUpdate(user);
  };

  /**show DeleteModal */
  const handleOpen = (id) => {
    setSelectedDelUserId(id);
  };

   /**Delete users */ 
   const handleDelete = () => {
    onDelete(selectedDelUser);
    setSelectedDelUserId(null);
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
      {!!selectedDelUser && (
        <ConfirmModal onOK={handleDelete} onCloseModal={handleClose} />
      )}
    </ListItem>
  );
};

export default UserInfor;
