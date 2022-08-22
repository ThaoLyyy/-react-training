import styled from "styled-components";
import UserImage from "../../assets/images/logo-users.png";
// import UserImage from "../../assets/images/add.png";

const UserSidebar = styled.header`
  background-color: #ffdede;
  /* width: 300px; */
  width: 245px;
  height: 100%;
  padding: 20px;
  left: 0px;
  top: 0px;
  position: fixed;
`;
const ContainerSidebar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0;
  width: 100%;
`;
const SidebarTitle = styled.h1`
  position: absolute;
  margin: 5px 70px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-family: 'Roboto-BoldItalic';
  letter-spacing: 1px;
  font-style: italic, bold;
`;
const UserLogo = styled.image`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  /* background-image: url(../../assets/images/logo-users.png); */
  background-image: url(${UserImage}); 
  /* flex-shrink: 0; */
  background-size: cover;
  background-position: center;
`;
export { UserSidebar, ContainerSidebar, SidebarTitle, UserLogo };
