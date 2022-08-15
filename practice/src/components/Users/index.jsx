import React from "react";
import { BtnAdd, AddNewUser, IconAddUser, BtnAddUser } from "./style";
import { MdPersonAdd } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
// import Button from "../../Common/Button";

const Users = () => {
  return (
    <IconContext.Provider value={{ color:"#000", size:"18px"}}>
      <>
        <AddNewUser>
          <BtnAdd>
            {/* <MdPersonAdd /> */}
            <AiOutlineUsergroupAdd />
          </BtnAdd>
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
