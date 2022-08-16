import React from "react";
import { UserSidebar, ContainerSidebar, SidebarTitle, UserLogo } from "./style";

let SideBar = () =>  {
  return (
    <UserSidebar>
      <ContainerSidebar>
        <UserLogo src={UserLogo} alt="UserLogo" />
        {/* <UserLogo src="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=170667a&w=0&h=jMvDQqfHSx2PEdvvRtSNX6FVXPK-_WZ1UzBRToBHv4g=" alt="UserLogo" /> */}
        {/* <img src="../../assets/images/logo-users.png" alt="logo" /> */}
        {/* <img src="/" alt="logo" /> */}
        <SidebarTitle>users manager</SidebarTitle>
      </ContainerSidebar>
    </UserSidebar>
  );
}

export default SideBar;
