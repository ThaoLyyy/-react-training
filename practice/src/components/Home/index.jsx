import { useContext, useState } from "react";
import Button from "../../common/Button";
import Popup from "../../common/Popup";
import Search from "../Search";
import { Container, Line, ListItem, Row, Section, TitleList, Wrapper } from "./style";
import { StoreContext } from "../../store";
import SideBar from "../SideBar";



const Home = () => {
  const {
    addUser,
    updateUser,
  } = useContext(StoreContext);

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
    <Section>
      <Container>
        <Wrapper>
          <SideBar />
          <Search />
        </Wrapper>

        <Line>

        <TitleList>list item user</TitleList>
        </Line>
        {/* <Title>users</Title> */}

        {/* <AddNew>Add new User</AddNew> */}
        <Button
          className="add"
          onClicked={handleOpenPopup}
          icon="fa fa-user-plus"
        >
        </Button>
        {/* <AddNew>Add new User</AddNew> */}
        {/* <Button onClicked={handleOpenPopup} >
          <ImUserPlus/>
          <FaRegAddressCard />
          </Button> */}
        {show && (
          <Popup
            text="Create user"
            onClosePopup={handleClosePopup}
            onSubmit={addUser}
          />
        )}
        <Row>
          <ListItem>
           
          </ListItem>
        </Row>
      </Container>
    </Section>
  );
};
export default Home;

