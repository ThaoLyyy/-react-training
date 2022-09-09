import { useContext, useRef, useState } from 'react'
import { StoreContext } from '../../store'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { Section, Container, Wrapper, Row, TitleList } from './style'
import Button from '../../components/common/Button'
import Modal from '../../components/common/Modal'
import UserItem from '../../components/UserItem'

const Home = () => {
  const { searchUser, users, filteredList } = useContext(StoreContext)

  const [showModal, setShowModal] = useState(false)

  const [inputValues, setInputValues] = useState('')

  const typingTimeoutRef = useRef(null)

  const handleSearchInput = e => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const value = e.target.value.trim()
      setInputValues(value)
    }, 300)
  }
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
      <Section>
        <Container>
          <Wrapper>
            <SideBar users={users} />
            <Row>
              <Search handleChange={handleSearchInput} onSearch={searchUser} />
              <TitleList>list item user</TitleList>
              <Button className="add" onClicked={handleOpenModal} icon="fa fa-user-plus"></Button>
              {/* <Button className="add" isShowing={isShowing} hide={toggle} icon="fa fa-user-plus"></Button> */}
              {showModal && <Modal text="Create user" onCloseModal={handleCloseModal} />}
              <UserItem users={filteredList.length === 0 ? users : filteredList} inputValues={inputValues} />
            </Row>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}
export default Home
