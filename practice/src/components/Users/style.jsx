import styled from "styled-components";
import IconAddUser from "../../assets/images/add.png";

// const IconAddUser = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   /* position: absolute; */
//   object-fit: cover;
//   background-image: url(${IconAddUser});
// `;
const Button = styled.button`
  font-size: 16px;
  margin: 5px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
`;

const AddNewUser = styled.p`
  font-size: 16px;
  font-family: "Roboto";
  position: absolute;
  padding: 6px 12px 6px 10px;
  background-color: #78e2f3;
  color: #fff;
  border-radius: 10px;
  margin-left: 1230px;
  vertical-align: middle;
`;

const BtnAddUser = styled.button`
  position: fixed;
  background: bottom;
  border: none;
  cursor: pointer;
  font-size: 22px;
`;

const MdPersonAdd = styled.p`
  margin: 20px;
`;
export { Button, AddNewUser, IconAddUser, BtnAddUser, MdPersonAdd };
