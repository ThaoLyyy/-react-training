import React from "react";
import { ContainerHeader, PageHeader, Title, UserLogo, WrapperLogo } from "./styles";

const Header = () => {
  return (
    <PageHeader>
      <ContainerHeader>
        <WrapperLogo>
          <UserLogo src={UserLogo} alt="UserLogo" />
          <Title>users manager</Title>
        </WrapperLogo>
      </ContainerHeader>
    </PageHeader>
  );
};

export default Header;
