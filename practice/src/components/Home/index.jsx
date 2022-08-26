import { useContext, useState } from "react";
import {
  Section,
  Container,
  Wrapper,
  LayoutWrapper,
  Layout,
  ListItem,
  TitleList,
} from "./style";
import { StoreContext } from "../../store";
import SideBar from "../SideBar";
import Header from "../Header";
import Search from "../Search";
import Button from "../common/Button";
import Modal from "../common/Modal";
import UserInfor from "../UserInfor";


const Home = () => {
  const { addUser, users, filteredList, updateUser, deleteUser } =
    useContext(StoreContext);


  const [show, setShow] = useState(false);
  /**show Modal */
  const handleOpenModal = () => {
    setShow(!show);
  };
  /**close Modal */
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Wrapper>
            <SideBar />
            <LayoutWrapper>
              <Search />
              <Layout>
                <TitleList>list item user</TitleList>
              </Layout>
              <Button
                className="add"
                onClicked={handleOpenModal}
                icon="fa fa-user-plus"
              ></Button>
              {show && (
                <Modal
                  text="Create user"
                  onCloseModal={handleCloseModal}
                  onSubmit={addUser}
                />
              )}

              {/* <ListUserInfor onUpdate={updateUser} /> */}
              {/* <ListUserItem> */}
            
                {/* <UserInfor
                  users={filteredList.length === 0 ? users : filteredList}
                  onUpdate={updateUser}
                  onDelete={deleteUser}
                /> */}

              {/* </ListUserItem> */}
            </LayoutWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
export default Home;
