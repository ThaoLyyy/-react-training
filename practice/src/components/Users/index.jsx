import React, { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";

const Users = () => {
  const [show, setShow] = useState(false);

  /**show Modal */
  const handleOpenModal = () => {
    setShow(!show);
  };
  /** close Modal*/ 
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        className="add"
        onClicked={handleOpenModal}
        icon="fa fa-user-plus"
      ></Button>
      {show && <Modal text="Create user" onClosePopup={handleCloseModal} />}
    </>
  );
};

export default Users;
