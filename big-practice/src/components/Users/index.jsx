import { useState } from "react";
import Button from "../../Common/Button";
import Modal from "../Common/Modal";

const Users = () => {
  const [show, setShow] = useState(false);

  /**show Modal */
  const handleOpenPopup = () => {
    setShow(!show);
  };
  
  /** close Modal*/ 
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <>
      {/* <Button onClicked={handleOpenPopup} icon="fas fa-plus-square"></Button> */}
      {/* <BtnAddUser >
        <AddNewUser>
        Add new</AddNewUser>
      </BtnAddUser> */}    
      {/* <AddNew>Add new </AddNew> */}
      <Button  className="add" onClicked={handleOpenPopup} icon="fa fa-user-plus"></Button>
      {show && <Modal text="Create user" onClosePopup={handleClosePopup} />}
    </>
  );
}
export default Users;
