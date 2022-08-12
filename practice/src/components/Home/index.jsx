import React from "react";
import Search from "../Search";
import SideBar from "../SideBar";
import Users from "../Users";
import { Line, Wrapper } from "./style";

const Home = () => {
  return (
    <Wrapper>
      <SideBar />
      <Search />
      <Line>List Item User</Line>
      {/* <Button className='add' text='Add New' icon='fas fa-plus-square' >ADD</Button> */}
      <Users />
    </Wrapper>
  );
};

export default Home;
