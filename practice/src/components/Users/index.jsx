import React, { useState } from "react";
import {  AddNewUser, BtnAddUser } from "./style";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
import Popup from "../../common/Popup";
import Button from "../../common/Button";


const Users = () => {
  const [show, setShow] = useState(false);

  const handleCancelPopup = () => {
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#000", size: "18px" }}>
      <>
        <AddNewUser>
          <Button onClicked={() => setShow(!show)}>
            <AiOutlineUsergroupAdd />
          </Button>
          {show && (
            <Popup text="Create Users" onCancelPopup={handleCancelPopup} />
          )}
          Add new
        </AddNewUser>
        <BtnAddUser></BtnAddUser>
      </>
    </IconContext.Provider>
  );
};

export default Users;
