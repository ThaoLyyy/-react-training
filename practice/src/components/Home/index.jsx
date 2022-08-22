import React, { useContext, useState } from "react";
// import { AiOutlineUsergroupAdd } from "react-icons/ai";
// import ListUserInfor from "../../common/ListUserInfor";
import Popup from "../../common/Popup";
import { StoreContext } from "../../store";
import SideBar from "../SideBar";
import Search from "../Search";
import Users from "../Users";
// import { AddNewUser, BtnAddUser, Button } from "../Users/style";
import { Content, Section, TitleList, Wrapper } from "./style";
import Button from "../../common/Button";

const Home = () => {
  const {
    addUser,
    updateUser,
  } = useContext(StoreContext);

  const [show, setShow] = useState(false);
  // show popup
  const handleOpenPopup = () => {
    setShow(!show);
  };
  // close popup
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <Section>     
        <Content>
          <Search />
          {/* <Line> */}
            {/* <TitleText>List item user</TitleText> */}
            <TitleList>list item user</TitleList>
          {/* </Line> */}
          <Wrapper>
        {/* <Title>users</Title> */}

        {/* <AddNew>Add new User</AddNew> */}
        <Button className="add" onClicked={handleOpenPopup} icon="fa fa-user-plus" >Add new User</Button>
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
          {/* <Row> */}
            <SideBar />
            {/* <ListItem> */}

              {/* <ItemInList
                users={filteredList.length === 0 ? users : filteredList}
                onDelete={deleteUser}
                onUpdate={updateUser}
              /> */}
            {/* </ListItem> */}
          {/* </Row> */}
      </Wrapper>
        </Content>
    </Section>
  );
};
export default Home;

