import React from "react";
import { AddNewUser, IconAddUser, BtnAddUser } from "./style";

let Users = () =>  {
  return (
    <>
      <BtnAddUser>
        {/* <IconAddUser src={IconAddUser} alt="iconsadd" /> */}
        <AddNewUser>
          {/* <img src="../../assets/images/add.png" alt="add" /> */}
          Add new{" "}
        </AddNewUser>
      </BtnAddUser>
    </>
  );
}

export default Users;
