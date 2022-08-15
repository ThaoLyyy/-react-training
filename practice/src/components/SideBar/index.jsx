import React from "react";
import { UserSidebar, ContainerSidebar, SidebarTitle, UserLogo } from "./style";

let SideBar = () =>  {
  return (
    <UserSidebar>
      <ContainerSidebar>
        <UserLogo src={UserLogo} alt="UserLogo" />
        {/* <img src="../../assets/images/logo-users.png" alt="logo" /> */}
        {/* <img src="/" alt="logo" /> */}
        <SidebarTitle>users manager</SidebarTitle>
      </ContainerSidebar>
    </UserSidebar>
  );
}

export default SideBar;
