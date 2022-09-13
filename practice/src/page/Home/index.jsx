import { useContext, useState } from 'react'
import { StoreContext } from '../../store'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { StyleSection, StyleContainer, StyleWrapper, StyleRow, StyleTitleList } from './style'
import Button from '../../components/common/Button'
import Modal from '../../components/common/Modal'
import UserItem from '../../components/UserItem'

const Home = () => {
  const { searchUser, users, filteredList } = useContext(StoreContext)

  const [showModal, setShowModal] = useState(false)

  // const {isShowing, toggle} = Modal();
  /**show Modal */
  const handleOpenModal = () => {
    setShowModal(!showModal)
  }
  /** close Modal */
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Header />
      <StyleSection>
        <StyleContainer>
          <StyleWrapper>
            <SideBar users={users} />
            <StyleRow>
              <Search onSearch={searchUser} />
              <StyleTitleList>list item user</StyleTitleList>
              <Button className="add" onClicked={handleOpenModal} icon="fa fa-user-plus"></Button>
              {showModal && <Modal text="Create user" onCloseModal={handleCloseModal} />}
              <UserItem users={filteredList.length === 0 ? users : filteredList} />
            </StyleRow>
          </StyleWrapper>
        </StyleContainer>
      </StyleSection>
    </>
  )
}
export default Home
