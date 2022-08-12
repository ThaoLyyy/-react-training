import React from "react";
import Button from "../../common/Button";
import { AddNewUser, IconAddUser, BtnAddUser } from "./style";
import { MdPersonAdd } from "react-icons/md";
import { IconContext } from "react-icons";
// import Button from "../../Common/Button";

const Users = () => {
  return (
    <IconContext.Provider value={{ color: "#000", size: "18px" }}>
      <>
        <AddNewUser>
          <MdPersonAdd />
          Add new
        </AddNewUser>
        <BtnAddUser>
          {/* <Button icon="fas fa-plus-square"></Button> */}
          {/* <Button icon="fa-solid fa-file-pen"></Button> */}
        </BtnAddUser>
      </>
    </IconContext.Provider>
  );
};

export default Users;
