import { useContext } from 'react'
import { StoreContext } from '../../store'
import Search from '../../components/Search'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { StyleSection, StyleContainer, StyleWrapper, StyleRow, StyleTitleList } from './style'
import UserItem from '../../components/UserItem'

const Home = () => {
  const { searchUser, users, filteredList } = useContext(StoreContext)

  return (
    <>
      <Header />
      <StyleSection>
        <StyleContainer>
          <StyleWrapper>
            <SideBar users={users} />
            <StyleRow>
              <Search onSearchInput={searchUser} />
              <StyleTitleList>list item user</StyleTitleList>
              <UserItem users={filteredList.length === 0 ? users : filteredList} />
            </StyleRow>
          </StyleWrapper>
        </StyleContainer>
      </StyleSection>
    </>
  )
}
export default Home
