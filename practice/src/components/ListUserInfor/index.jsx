

import { useState } from "react";
import Button from "../Button";
import Popup from "../Popup";
import {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem ,
  IconBtn,
  DetailInfor,
} from "./style";

const ListUserInfor = (users, onUpdate) => {
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null);
 
  /** close mode user */ 
  const handleClose = () => {
    setSelectedUpdateUserId(null);
  };
  
  /** update user */ 
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
            <IconBtn>
              <Button
                className="edit"
                icon="fas fa-edit"
                onClicked={() => setSelectedUpdateUserId(user)}
              ></Button>
              <Button
                onClicked={''}
                className="delete"
                icon="fas fa-trash-alt"
              ></Button>
            </IconBtn>
          </InforItem>
        </Item>
      ))}
      
      {/* show update popup */}
      {!!selectedUpdateUserId && (
        <Popup
          text="Edit Users"
          defaultValue={selectedUpdateUserId}
          OnIsUpdate={handleUpdate}
          onClosePopup={handleClose}
        />
      )}
    </ListItem>
  );
};

export default ListUserInfor;
