import React, { useState } from "react";
import { AddNewUser, BtnAddUser, BtnImgAdd } from "./style";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
import Popup from "../../common/Popup";
import Button from "../../common/Button";

const Users = () => {
  const [show, setShow] = useState(false);

  // show popup
  const handleOpenPopup = () => {
    setShow(!show);
  };
  // close popup
  const handleClosePopup = () => {
    setShow(false);
  };

  //   return (
  //     <IconContext.Provider value={{ color: "#000", size: "18px" }}>
  //       <>
  //        <BtnAddUser>
  //         <AddNewUser>
  //           {/* <Button onClicked={() => setShow(!show)}> */}
  //           <Button >
  //             <AiOutlineUsergroupAdd />
  //         <BtnImgAdd src={BtnImgAdd} alt="BtnImgAdd" />

  //           </Button>
  //           {/* {show && ( */}
  //             {/* <Popup text="Create Users" onCancelPopup={handleCancelPopup} /> */}
  //           {/* )} */}
  //           Add new
  //         </AddNewUser>

  //         </BtnAddUser>
  //       </>
  //     </IconContext.Provider>
  //   );
  // };

  // export default Users;

  return (
    <IconContext.Provider
      value={{
        color: "#000",
        size: "25px",
        padding: "20px",
        background: "red",
      }}
    >
      <>
        <BtnAddUser onClicked={handleOpenPopup}>
          <AddNewUser>
            <AiOutlineUsergroupAdd  />
            Add new
          </AddNewUser>
          {/* <Button></Button> */}

          {show && (
            <Popup text="Create User" onClosePopup={handleClosePopup} />
          )}
        </BtnAddUser>
      </>
    </IconContext.Provider>
  );
};

export default Users;
