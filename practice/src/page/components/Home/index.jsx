import { useContext, useState } from "react";
import { StoreContext } from "../../../store";
import SearchUsers from "../Search";
import SideBar from "../SideBar";
import Header from "../Header";
import {
  Wrapper,
  TitleList,
  Row,
  Container,
  Section,
} from "./style";
import Button from "../common/Button";
import Modal from "../common/Modal";
import UserItem from "../common/UserItem";

const Home = () => {
  
  const { addUser, updateUser, deleteUser, searchUser, users, filteredList } =
    useContext(StoreContext);

  const [show, setShow] = useState(false);
  /**show Modal */
  const handleOpenModal = () => {
    setShow(!show);
  };
  /** close Modal */
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
            <Row>
              <SearchUsers onSearch={searchUser} />
                <TitleList>list item user</TitleList>
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
                <UserItem
                  users={filteredList.length === 0 ? users : filteredList}
                  onUpdate={updateUser}
                  onDelete={deleteUser}
                />
            </Row>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
export default Home;
