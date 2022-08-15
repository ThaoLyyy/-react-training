import { useState } from "react";
import Button from "../Button";
import { ButtonWrapper } from "./style";
import {
  ModalWrapper,
  Modal,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Errors,
} from "./style";

const Popup = ({ text, defaultValue = {} }) => {
  const [inputs, setInputs] = useState(defaultValue);
  // get value input
  const handleChange = (event) => {
    const username = event.target.username;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [username]: value }));
  };

  return (
    <ModalWrapper>
      <Modal>
        <Title> Create Users{text}</Title>
        {/* {errors.map((error) => (
          <Errors key={error}>Error: {error}</Errors>
        ))} */}

        {/* <Errors notice>{msg}</Errors> */}
        <FormSubmit>
          <Label>Image</Label>
          <InputUser
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
          />
          <Label>UserName</Label>
          <InputUser
            type="text"
            name="name"
            value={inputs.Username || ""}
            onChange={handleChange}
          />

          <Label>Phone:</Label>
          <InputUser
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />

          <Label>Email</Label>
          <InputUser
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />

          <ButtonWrapper>
            <Button save type="submit" value="Submit">
              Save Users
            </Button>
            <Button type="button">Cancel</Button>
          </ButtonWrapper>
        </FormSubmit>
      </Modal>
    </ModalWrapper>
  );
};

export default Popup;
