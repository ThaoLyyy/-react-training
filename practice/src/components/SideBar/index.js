import React from "react";
import { UserSidebar, ContainerSidebar, SidebarTitle, UserLogo } from "./style";

function SideBar() {
  return (
    <UserSidebar>
      <ContainerSidebar>
        <UserLogo src={UserLogo} alt="UserLogo" />
        <SidebarTitle>users management</SidebarTitle>
      </ContainerSidebar>
    </UserSidebar>
  );
}

export default SideBar;
