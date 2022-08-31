import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  StyleModalWrapper,
  StyleModalUser,
  StyleTitle,
  StyleFormSubmit,
  StyleLabel,
  StyleInputUser,
  StyleError,
  StyleBtnWrapper,
  StyleButton,
} from "./style";

const Modal = ({
  onCloseModal,
  text,
  defaultValue = {},
  onSubmit,
  OnIsUpdate,
}) => {
  // error message
  const [errors, setErrors] = useState([]);

  // success messgage
  const [message, setMsg] = useState("");

  const [inputs, setInputs] = useState(defaultValue);

  /**get value input */
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /** validate form */
  const validate = () => {
    const errors = [];

    if (inputs.image === "") {
      errors.push("Please enter image");
    }

    if (inputs.username === "") {
      errors.push("Please enter username");
    }
    if (inputs.email === "") {
      errors.push("Please enter email");
    }

    if (inputs.phone === "") {
      errors.push("Please enter phone");
    } else {
      if (Number(inputs.phone) < 0) {
        errors.push("Wrong phone number");
      }
    }

    if (inputs.address === "") {
      errors.push("Please enter address");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    /**update data */
    if (inputs.id) {
      OnIsUpdate(inputs);
      onCloseModal();
    } else {
      /**submit data */
      inputs.id = uuidv4();
      onSubmit({ ...inputs });

      setInputs("");
      setMsg("Create successful users ");
    }
  };

  return (
    <StyleModalWrapper>
      <StyleModalUser>
        <StyleTitle>{text}</StyleTitle>
        {errors.map((error, index) => (
          <StyleError key={index}>Error: {error}</StyleError>
        ))}
        <StyleError notice>{message}</StyleError>
        <StyleFormSubmit onSubmit={handleSubmit}>
          <StyleLabel>Image Url:</StyleLabel>
          <StyleInputUser
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
          />
          <StyleLabel>Username:</StyleLabel>
          <StyleInputUser
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <StyleLabel>Phone:</StyleLabel>
          <StyleInputUser
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
          <StyleLabel>Email:</StyleLabel>
          <StyleInputUser
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <StyleLabel>Address:</StyleLabel>
          <StyleInputUser
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
          <StyleBtnWrapper>
            <StyleButton save type="submit" value="Submit">
              Save Users
            </StyleButton>
            <StyleButton type="button" onClick={onCloseModal}>
              Cancel
            </StyleButton>
          </StyleBtnWrapper>
        </StyleFormSubmit>
      </StyleModalUser>
    </StyleModalWrapper>
  );
};

export default Modal;
