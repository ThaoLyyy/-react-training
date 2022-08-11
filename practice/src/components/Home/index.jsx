import React from "react";
import Search from "../Search";
import SideBar from "../Sidebar";
import Users from "../Users";
import { Line, Wrapper } from "./style";

let Home = () => {
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
