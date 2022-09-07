import { v4 as uuidv4 } from 'uuid'
import { memo, useState } from 'react'
import {
  StyleModalWrapper,
  StyleModalUser,
  StyleTitle,
  StyleFormSubmit,
  StyleInputUser,
  StyleError,
  StyleBtnWrapper,
  StyleButton
} from './style'
import { useContext } from 'react'
import { StoreContext } from '../../../store'

const Modal = ({ onCloseModal, text, defaultValue = {} }) => {
  const { addUser, updateUser } = useContext(StoreContext)

  /**error message*/
  const [errors, setErrors] = useState({})

  /**The defaultValue property sets*/
  const [inputs, setInputs] = useState(defaultValue)

  /**get value input */
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  /** validate form */
  const validate = () => {
    const errors = {}

    if (!inputs.image) {
      errors.image = 'Please enter image'
    }

    if (!inputs.name) {
      errors.name = 'Please enter alphabet characters only'
    }
    if (!inputs.email) {
      errors.email = 'Please input your email'
    }

    if (!inputs.phone) {
      errors.phone('Please enter phone')
    } else {
      if (+!inputs.phone > 10) {
        errors.phone = 'Enter the correct phone number'
      }
    }

    if (!inputs.address) {
      errors.address = 'Please enter address'
    }

    setErrors(errors)
    if (Object.keys(errors).length > 0) return false
    return true
  }

  const handleSubmit = e => {
    e.preventDefault() // Now nothing will happen
    const isValid = validate()
    if (!isValid) return

    /**update data */
    if (inputs.id) {
      updateUser(inputs)
      onCloseModal()
    } else {
      inputs.id = uuidv4()
      addUser({ ...inputs })
      onCloseModal()
      setInputs('')
    }
  }

  return (
    <StyleModalWrapper>
      <StyleModalUser>
        <StyleTitle>{text}</StyleTitle>
        {/* {errors.map((error, index) => (
          <StyleError key={index}>Error: {error}</StyleError>
        ))} */}

        <StyleFormSubmit onSubmit={handleSubmit}>
          <StyleInputUser
            name="image"
            placeholder="Image Url*"
            value={inputs.image || ''}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
            required
          />
          {/* add the error message below the input field */}
          <StyleError>{errors.image}</StyleError>
          <StyleInputUser
            type="text"
            name="name"
            placeholder="Username*"
            value={inputs.name || ''}
            onChange={handleChange}
            required
          />
          <StyleError>{errors.name}</StyleError>
          <StyleInputUser
            // type="number"
            type="text"
            name="phone"
            placeholder="Phone*"
            value={inputs.phone || ''}
            onChange={handleChange}
            required
          />
          <StyleError>{errors.phone}</StyleError>
          <StyleInputUser
            type="email"
            name="email"
            placeholder="Email*"
            value={inputs.email || ''}
            onChange={handleChange}
            required
          />
          <StyleError>{errors.email}</StyleError>
          <StyleInputUser
            type="text"
            name="address"
            placeholder="Address*"
            value={inputs.address || ''}
            onChange={handleChange}
            required
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

export default memo(Modal)
