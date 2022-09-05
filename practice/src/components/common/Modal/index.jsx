import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import {
  StyleModalWrapper,
  StyleModalUser,
  StyleTitle,
  StyleFormSubmit,
  StyleLabel,
  StyleInputUser,
  StyleError,
  StyleBtnWrapper,
  StyleButton
} from './style'
import { useContext } from 'react'
import { StoreContext } from '../../../store'

const Modal = ({
  onCloseModal,
  text,
  defaultValue = {},
  // Errors,

  onSubmit,
  OnIsUpdate
}) => {
  const { addUser, updateUser } = useContext(StoreContext)
  // error message
  const [errors, setErrors] = useState([])

  // success messgage
  const [message, setMessage] = useState('')

  const [inputs, setInputs] = useState(defaultValue)

  /**get value input */
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  /** validate form */
  const validate = () => {
    const message = {}

    if (!inputs.image) {
      message.image = 'Please enter image'
    }

    if (!inputs.name) {
      message.name = 'Please enter username'
    }
    if (!inputs.email) {
      message.email = 'Please input your email'
    }

    if (!inputs.phone) {
      message.phone('Please enter phone')
    }
    //  else {
    //   if (Number(!inputs.phone) <= 0) {
    //     message.phone = "Wrong phone number";
    //   }
    // }

    if (!inputs.address) {
      message.address = 'Please enter address'
    }

    // return errors;
    setErrors(message)
    if (Object.keys(message).length > 0) return false
    return true
  }

  const handleSubmit = e => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    // const errors = validate();

    // if (errors.length > 0) {
    //   setErrors(errors);
    //   return;
    // }

    /**update data */
    if (inputs.id) {
      // OnIsUpdate(inputs);
      updateUser(inputs)
      onCloseModal()
    } else {
      /**submit data */
      inputs.id = uuidv4()
      addUser({ ...inputs })
      // onSubmit({ ...inputs });
      onCloseModal()
      setInputs('')
      // setMsg("Create successful users ");
    }
  }

  return (
    <StyleModalWrapper>
      <StyleModalUser>
        <StyleTitle>{text}</StyleTitle>
        {errors.map((error, index) => (
          <StyleError key={index}>Error: {error}</StyleError>
        ))}
        <StyleError notice>{message}</StyleError>

        <StyleFormSubmit onSubmit={handleSubmit}>
          {/* <StyleLabel>Image Url:</StyleLabel> */}
          <StyleInputUser
            name="image"
            placeholder="Image Url*"
            value={inputs.image || ''}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
          />
          <StyleError>{errors.image}</StyleError>

          {/* <StyleLabel>Username:</StyleLabel> */}
          <StyleInputUser
            type="text"
            name="name"
            placeholder="Username*"
            value={inputs.name || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.name}</StyleError>

          {/* <StyleLabel>Phone:</StyleLabel> */}
          <StyleInputUser
            type="number"
            // type="text"
            name="phone"
            placeholder="Phone*"
            value={inputs.phone || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.phone}</StyleError>

          {/* <StyleLabel>Email:</StyleLabel> */}
          <StyleInputUser
            type="email"
            name="email"
            placeholder="Email*"
            value={inputs.email || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.email}</StyleError>

          {/* <StyleLabel>Address:</StyleLabel> */}
          <StyleInputUser
            type="text"
            name="address"
            placeholder="Address*"
            value={inputs.address || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.address}</StyleError>

          <StyleBtnWrapper>
            <StyleButton save type="submit" value="Submit" onClicked={handleSubmit}>
              Save Users
            </StyleButton>
            <StyleButton type="button" onClick={onCloseModal}>
              Cancel
            </StyleButton>
          </StyleBtnWrapper>
        </StyleFormSubmit>
      </StyleModalUser>
    </StyleModalWrapper>
  )
}

export default Modal
