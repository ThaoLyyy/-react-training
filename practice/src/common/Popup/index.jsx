import { useContext, useState } from "react";
import { StoreContext } from "../../store";
import {
  ModalWrapper,
  ModalUser,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Errors,
  BtnWrapper,
  Button,
} from "./style";

const Popup = ({ text, handleClosePopup }) => {
  const { addUser, users } = useContext(StoreContext);

  /**  error message */
  const [errors, setErrors] = useState([]);

  /** success message*/
  const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState({});

  // const [values, setValues] = useState({
  //   imageurl: "",
  //   username: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  // });

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Password",
  //     errorMessage:
  //       "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //     label: "Password",
  //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: "username",
  //     type: "text",
  //     placeholder: "username",
  //     errorMessage:
  //       "Username should be 3-16 characters and shouldn't include any special character!",
  //     label: "Username",
  //     pattern: "^[A-Za-z0-9]{3,16}$",
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: "phone",
  //     type: "date",
  //     placeholder: "Phone",
  //     errorMessage: "",
  //     label: "Phone",
  //   },
  //   {
  //     id: 4,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email",
  //     errorMessage: "It should be a valid email address!",
  //     label: "Email",
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: "address",
  //     type: "address",
  //     placeholder: "Address",
  //     errorMessage: "",
  //     label: "address",
  //     required: true,
  //   },
  // ];
  // get value input
  const handleChange = (e) => {
    const username = e.target.username;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [username]: value }));
  };

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
    } else {
    /**submit data */
      addUser({ ...inputs });
      setInputs("");
      setMessage("Create successful users ");
    }
  };

  return (
    <ModalWrapper>
    
      <ModalUser>
      {errors.map((error) => (
          <Errors key={error}>Error: {error}</Errors>
        ))}

        <Errors notice>{message}</Errors>
        <Title>create user{text}</Title>
        
        <FormSubmit onSubmit={handleSubmit}>
          <Label>Image Url:</Label>
          <InputUser
            name="image"
            // value={inputs.image || ""}
            onChange={handleChange}
          />
          <Label>Username:</Label>
          <InputUser
            type="text"
            name="name"
            // value={inputs.Username || ""}
            onChange={handleChange}
          />

          <Label>Phone:</Label>
          <InputUser
            type="text"
            name="phone"
            // value={inputs.phone || ""}
            onChange={handleChange}
          />

          <Label>Email:</Label>
          <InputUser
            type="text"
            name="email"
            // value={inputs.email || ""}
            onChange={handleChange}
          />

          <Label>Address:</Label>
          <InputUser
            type="text"
            name="address"
            // value={inputs.address || ""}
            onChange={handleChange}
          />

          <BtnWrapper>
            <Button save type="submit" value="Submit">
              Save Users
            </Button>
            <Button type="button" onClick={handleClosePopup}>
              Close
            </Button>
          </BtnWrapper>
        </FormSubmit>
      </ModalUser>
    </ModalWrapper>
  );
};

export default Popup;
