import { useContext, useState } from "react";
import Button from "../../common/Button";
import Popup from "../../common/Popup";
// import ListUserInfor from "../../common/ListUserInfor";
import Search from "../Search";
import {
  Section,
  Container,
  Wrapper,
  Row,
  Layout,
  ListItem,
  TitleList,
} from "./style";
import { StoreContext } from "../../store";
import SideBar from "../SideBar";
import Header from "../Header";
import ListUserInfor from "../ListUserInfor";

const Home = () => {
  const { addUser, updateUser } = useContext(StoreContext);

  const [show, setShow] = useState(false);
  /**show popup */
  const handleOpenPopup = () => {
    setShow(!show);
  };
  /**close popup */
  const handleClosePopup = () => {
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
              <Search />

              <Layout>
                <TitleList>list item user</TitleList>
              </Layout>
              <Button
                className="add"
                onClicked={handleOpenPopup}
                icon="fa fa-user-plus"
              ></Button>
              {show && (
                <Popup
                  text="Create user"
                  onClosePopup={handleClosePopup}
                  onSubmit={addUser}
                />
              )}

              <ListItem>
                {/* <ListUserInfor onUpdate={updateUser} /> */}
              </ListItem>
            </Row>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};
export default Home;
