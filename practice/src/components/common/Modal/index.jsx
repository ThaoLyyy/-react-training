import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  ModalWrapper,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Button,
  BtnWrapper,
  ModalUser,
  Error,
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
    }
    /**submit data */
    else {
      inputs.id = uuidv4();
      onSubmit({ ...inputs });

      setInputs("");
      setMsg("Create successful users ");
    }
  };

  return (
    <ModalWrapper>
      <ModalUser>
        <Title>{text}</Title>
        {errors.map((error, index) => (
          <Error key={index}>Error: {error}</Error>
        ))}
        <Error notice>{message}</Error>

        <FormSubmit onSubmit={handleSubmit}>
          <Label>Image Url:</Label>
          <InputUser
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
          />
          <Label>Username:</Label>
          <InputUser
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />

          <Label>Phone:</Label>
          <InputUser
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />

          <Label>Email:</Label>
          <InputUser
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />

          <Label>Address:</Label>
          <InputUser
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />

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
}

export default Modal;
