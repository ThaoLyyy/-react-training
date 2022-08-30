import styled from "styled-components";
import UserImage from "../../assets/images/logo-users.png";

const PageHeader = styled.header`
  /* background-color: #ffdede;
  width: 20%;
  height: 100%;
  padding: 20px;
  left: 0px;
  top: 0px; */
  /* width: 300px; */
  /* width: 245px; */
  /* position: fixed; */
  /* display: none; */
`;
const ContainerHeader = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  /* display: inline-flex; */
`;
const WrapperLogo = styled.div`
  width: 300px;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0 0 20px;
  position: fixed;
`;
const Title = styled.h1`
  /* position: absolute; */
  margin: 5px 70px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  font-family: "Roboto-BoldItalic";
  letter-spacing: 1px;
  font-style: italic, bold;
`;
const UserLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  /* background-image: url(../../assets/images/logo-users.png); */
  background-image: url(${UserImage});
  background-size: cover;
  background-position: center;
`;
export { PageHeader, ContainerHeader, WrapperLogo, Title, UserLogo };
