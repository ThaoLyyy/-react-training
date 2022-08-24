

import { useState } from "react";
import Button from "../../common/Button";
import Popup from "../../common/Popup";
// import Button from "../Button";
// import Popup from "../Popup";
import {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem ,
  Icon,
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
            <Icon>
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
            </Icon>
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
