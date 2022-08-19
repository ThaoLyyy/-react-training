import { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../Button";


import {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem,
  DescrItem,
  BtnIcon,
  
} from "./style";

const ListUserInfor = ({users}) => {
  const [selectedDelUserId, setSelectedDelUserId] = useState(null);

 // Show DeletePopup
 const handleOpen = (id) => {
  setSelectedDelUserId(id);
};
// Close popup
const handleClose = () => {
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
            <DescrItem>Username: {user.userName} </DescrItem>
            <DescrItem>Phone: {user.userPhone} </DescrItem>
            <DescrItem>Email: {user.userEmail} </DescrItem>
            <DescrItem>Address: {user.userAddress} </DescrItem>
            <BtnIcon>
              <Button className="edit">
                <FaEdit />
              </Button>
              <Button className="delete" onClicked={handleOpen}>
                <RiDeleteBinLine />
              </Button>           
              {/* {show && <DeletePopup onClosePopup={handleClose} />} */}
            </BtnIcon>
          </InforItem>
        </Item>
      ))}
      {/* {!!selectedDelUserId && (
        <ConfirmDeletePopup onOK={handleDelete} onClosePopup={handleClose} />
      )} */}
    </ListItem>
  );
};

export default ListUserInfor;
