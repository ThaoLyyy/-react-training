import { useState, useContext } from 'react'
import { StoreContext } from '../../store'
import Button from '../common/Button'
import ConfirmModal from '../ConfirmModal'
import Modal from '../common/Modal'
import {
  StyleListItem,
  StyleItem,
  StyleImageWrapper,
  StyleImageItem,
  StyleIcon,
  StyleInforItem,
  StyleDetailInfor
} from './style'

const UserItem = ({ users }) => {
  const [showModal, setShowModal] = useState(false)
  const { deleteUser, updateUser } = useContext(StoreContext)
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null)
  const [selectedDelUserId, setSelectedDelUserId] = useState(null)

  /**show Modal */
  const handleOpenModal = () => {
    setShowModal(!showModal)
  }
  /** close Modal */
  const handleCloseModal = () => {
    setShowModal(false)
  }
  /** Show DeleteModal */
  const handleOpen = id => {
    setSelectedDelUserId(id)
  }
  /**Close modal*/
  const handleClose = () => {
    setSelectedUpdateUserId(null)
    setSelectedDelUserId(null)
  }
  /**Delete users*/
  const handleDelete = () => {
    deleteUser(selectedDelUserId)
    setSelectedDelUserId(null)
  }
  /**Update user*/
  const handleUpdate = user => {
    updateUser(user)
  }

  return (
    <>
      <Button className="add" onClicked={handleOpenModal} icon="fa fa-user-plus"></Button>
      {showModal && <Modal text="Create user" onCloseModal={handleCloseModal} />}
      <StyleListItem>
        {users.map(user => (
          <StyleItem key={user.id}>
            <StyleImageWrapper>
              <StyleImageItem src={user.image} />
            </StyleImageWrapper>
            <StyleInforItem>
              <StyleDetailInfor>Username: {user.name} </StyleDetailInfor>
              <StyleDetailInfor>Email: {user.email}</StyleDetailInfor>
              <StyleDetailInfor>Phone: {user.phone}</StyleDetailInfor>
              <StyleDetailInfor>Address: {user.address}</StyleDetailInfor>
              <StyleIcon>
                <Button className="edit" icon="fas fa-edit" onClicked={() => setSelectedUpdateUserId(user)}></Button>
                <Button onClicked={() => handleOpen(user.id)} className="delete" icon="fas fa-trash-alt"></Button>
              </StyleIcon>
            </StyleInforItem>
          </StyleItem>
        ))}

        {/* show update modal */}
        {!!selectedUpdateUserId && (
          <Modal
            text="Edit Users"
            defaultValue={selectedUpdateUserId}
            OnIsUpdate={handleUpdate}
            onCloseModal={handleClose}
          />
        )}

        {/* show delete modal */}
        {!!selectedDelUserId && <ConfirmModal onDelete={handleDelete} onCloseModal={handleClose} />}
      </StyleListItem>
    </>
  )
}

export default UserItem
