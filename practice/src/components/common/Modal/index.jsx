import { useState } from 'react'
import { memo } from 'react'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StoreContext } from '../../../store'
import {
  StyleModalWrapper,
  StyleOverlay,
  StyleTitle,
  StyleFormSubmit,
  StyleInputUser,
  StyleError,
  StyleBtnWrapper,
  StyleButton
} from './style'

const Modal = ({ onCloseModal, text, defaultValue = {} }) => {
  const { addUser, updateUser } = useContext(StoreContext)

  /**error message*/
  const [errors, setErrors] = useState('')

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
      errors.image = 'User image is required!'
    }

    if (!inputs.name) {
      errors.name = 'User name is required!'
    }
    if (!inputs.email) {
      errors.email = 'User email is required!'
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = 'Email is invalid.'
    }

    if (!inputs.phone) {
      errors.phone = 'Please enter at least 10 characters!'
    }

    if (!inputs.address) {
      errors.address = 'User address is required!'
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
      <StyleOverlay>
        <StyleTitle>{text}</StyleTitle>
        <StyleFormSubmit onSubmit={handleSubmit}>
          {/* add the error message below the input field */}
          <StyleInputUser
            type="text"
            name="name"
            placeholder="Username*"
            value={inputs.name || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.name}</StyleError>
          <StyleInputUser
            type="email"
            name="email"
            placeholder="Email*"
            value={inputs.email || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.email}</StyleError>
          <StyleInputUser
            type="tel"
            name="phone"
            placeholder="Phone* xxx-xxx-xxxx"
            value={inputs.phone || ''}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <StyleError>{errors.phone}</StyleError>
          <StyleInputUser
            type="text"
            name="address"
            placeholder="Address*"
            value={inputs.address || ''}
            onChange={handleChange}
          />
          <StyleError>{errors.address}</StyleError>
          <StyleInputUser
            type="url"
            name="image"
            placeholder="Image Url*"
            value={inputs.image || ''}
            onChange={handleChange}
            accept="image/png, image/jpg, image/webp"
          />
          <StyleError>{errors.image}</StyleError>
          <StyleBtnWrapper>
            <StyleButton backgroundColor type="submit" value="Submit" onClicked={handleSubmit}>
              Save Users
            </StyleButton>
            <StyleButton type="button" onClick={onCloseModal}>
              Cancel
            </StyleButton>
          </StyleBtnWrapper>
        </StyleFormSubmit>
      </StyleOverlay>
    </StyleModalWrapper>
  )
}

export default memo(Modal)
