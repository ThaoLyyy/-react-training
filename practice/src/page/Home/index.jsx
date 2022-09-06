import { useContext, useState } from 'react'
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

  // const { users, filteredList, searchUser } = useContext(StoreContext);

  const [show, setShow] = useState(false)

  /**show Modal */
  const handleOpenModal = () => {
    setShow(!show)
  }
  /** close Modal */
  const handleCloseModal = () => {
    setShow(false)
  }

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Wrapper>
            <SideBar users={users} />
            <Row>
              <Search onSearch={searchUser} />
              <TitleList>list item user</TitleList>
              <Button className="add" onClicked={handleOpenModal} icon="fa fa-user-plus"></Button>
              {show && (
                <Modal
                  text="Create user"
                  onCloseModal={handleCloseModal}
                  // onSubmit={addUser}
                />
              )}
              <UserItem users={filteredList.length === 0 ? users : filteredList} />
            </Row>
          </Wrapper>
        </Container>
      </Section>
    </>
  )
}
export default Home
