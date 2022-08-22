import React, { useState } from "react";
import { AddNewUser, BtnAddUser, BtnImgAdd } from "./style";
// import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { IconContext } from "react-icons";
import Popup from "../../common/Popup";
import { Button } from "../../common/Popup/style";

const Users = () => {
  const [show, setShow] = useState(false);

  /**show popup */
  const handleOpenPopup = () => {
    setShow(!show);
  };
  /** close popup*/ 
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    // <IconContext.Provider
    //   value={{
    //     color: "#000",
    //     size: "25px",
    //     padding: "20px",
    //     background: "red",
    //   }}
    // >
    //   <BtnAddUser>
    //     <AddNewUser>
    //       <ImUserPlus />
    //       {/* <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> */}
    //       Add new
    //     </AddNewUser>
    //   </BtnAddUser>
    //   {/* <Button onClicked={handleOpenPopup} icon="fa-solid fa-user-plus"> */}
    //   <Button onClicked={handleOpenPopup} icon="fas fa-plus-square" />

    //   {show && <Popup text="Create users" onClosePopup={handleClosePopup} />}
    // </IconContext.Provider>
    <>
      <Button
        className="add"
        onClicked={handleOpenPopup}
        icon="fa fa-user-plus"
      ></Button>
      {show && <Popup text="Create user" onClosePopup={handleClosePopup} />}
    </>
  );
};

export default Users;
