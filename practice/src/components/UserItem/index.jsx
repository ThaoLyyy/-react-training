import { useContext, useState } from 'react'
import {
  StyleListItem,
  StyleItem,
  StyleImageWrapper,
  StyleImageItem,
  StyleIcon,
  StyleInforItem,
  StyleDetailInfor,
  Alert
} from './style'
import ConfirmModal from '../common/ConfirmModal'
import Button from '../common/Button'
import Modal from '../common/Modal'
import { StoreContext } from '../../store'
import { useEffect } from 'react'

const UserItem = ({ users }) => {
  const { deleteUser, updateUser } = useContext(StoreContext)
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null)
  const [selectedDelUserId, setSelectedDelUserId] = useState(null)
  // const [showAlert, setShowAlert] = useState(false);

  // const handleShowAlert = () => {
  //   setShowAlert(true);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 2000);
  // };

  useEffect(() => {
    handleClose()

    // return () => {
    //     handleShowAlert();
    // }
  }, [])

  // Show DeleteModal
  const handleOpen = id => {
    setSelectedDelUserId(id)
  }
  // Close Modal
  const handleClose = () => {
    setSelectedUpdateUserId(null)
    setSelectedDelUserId(null)
  }
  // Delete users
  const handleDelete = () => {
    deleteUser(selectedDelUserId)
    setSelectedDelUserId(null)
  }
  // Update user
  const handleUpdate = user => {
    updateUser(user)
  }
  return (
    <StyleListItem>
      {users.map(user => (
        <StyleItem key={user.id}>
          <StyleImageWrapper>
            <StyleImageItem src={user.image} />
          </StyleImageWrapper>
          <StyleInforItem>
            <StyleDetailInfor>Username: {user.name} </StyleDetailInfor>
            <StyleDetailInfor>Phone: {user.phone}</StyleDetailInfor>
            <StyleDetailInfor>Email: {user.email}</StyleDetailInfor>
            <StyleDetailInfor>Address: {user.address}</StyleDetailInfor>
            <StyleIcon>
              <Button className="edit" icon="fas fa-edit" onClicked={() => setSelectedUpdateUserId(user)}></Button>
              <Button onClicked={() => handleOpen(user.id)} className="delete" icon="fas fa-trash-alt"></Button>
            </StyleIcon>
          </StyleInforItem>
        </StyleItem>
      ))}

      {/* show update popup */}
      {!!selectedUpdateUserId && (
        <Modal
          text="Edit Users"
          defaultValue={selectedUpdateUserId}
          OnIsUpdate={handleUpdate}
          onCloseModal={handleClose}
        />
      )}

      {/* <Alert show={showAlert} variant="success">
        Emlployee List Updated Succefully!
      </Alert> */}

      {/* show delete popup */}
      {!!selectedDelUserId && <ConfirmModal onDel={handleDelete} onCloseModal={handleClose} />}
    </StyleListItem>
  )
}
export default UserItem
