import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  ModalWrapper,
  ModalUser,
  Error,
  Title,
  FormSubmit,
  Label,
  InputUser,
  BtnWrapper,
  Button,
  Errors,
} from "./style";

const Modal = ({ text, onSubmit, onCloseModal, OnIsUpdate, defaultValue = {},}) => {

  /**  error message */
  const [errors, setErrors] = useState("");
  const [message, setmessage] = useState("");
  /** success message*/
  // const [message, setMessage] = useState("");


  const [inputs, setInputs] = useState(defaultValue);

  // get value input

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const validate = () => {
    const message = {};

    if (!inputs.image === "") {
      message.push("Please enter an image");
    }

    if (!inputs.name === "") {
      message.push("Please enter username");
    }
    if (!inputs.email === "") {
      message.push("Please enter email");
    }

    if (!inputs.phone === "") {
      message.push("Please enter phone");
    } else {
      if (Number(inputs.phone) > 0) {
        message.push("Wrong phone number");
      }
    }

    if (!inputs.address === "") {
      message.push("Please enter address");
    }

    setErrors(message);
    if (Object.keys(message).length > 0) return false;
    return true;
    // return message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid  = validate();
    if (!isValid) return;

    // if (message.length > 0) {
    //   setmessage(message);
    //   return;
    // }

    // update data
    if (inputs.id) {
      OnIsUpdate(inputs);
      onCloseModal();
    } else {
      inputs.id = uuidv4();
      onSubmit({ ...inputs });
      /**submit data */
      setInputs("");
      // setMessage("Create successful users ");
    }
  };

  return (
    <ModalWrapper>
      <ModalUser>
        <Title>{text}</Title>
        {/* {message.map((error, index) => (
          <Error key={index}>Error: {error}</Error>
        ))} */}

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Image Url:</Label>
          <InputUser
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
          />
           <Errors>{errors.image}</Errors>

          <Label>Username:</Label>
          <InputUser
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <Errors>{errors.name}</Errors>

          <Label>Phone:</Label>
          <InputUser
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
          <Errors>{errors.phone}</Errors>


          <Label>Email:</Label>
          <InputUser
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <Errors>{errors.email}</Errors>


          <Label>Address:</Label>
          <InputUser
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
          <Errors>{errors.address}</Errors>


          <BtnWrapper>
            <Button save type="submit" value="Submit">
              Save Users
            </Button>
            <Button type="button" onClick={onCloseModal}>
              Cancel
            </Button>
          </BtnWrapper>
        </FormSubmit>
      </ModalUser>
    </ModalWrapper>
  );
};

export default Modal;
