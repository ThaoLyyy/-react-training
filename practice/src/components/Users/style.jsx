import styled from "styled-components";
import IconAddUser from "../../assets/images/add.png";
import BtnImageAdd from "../../assets/images/add.png";


const ListItem = styled.div`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const BtnImgAdd = styled.img`
  margin: 20px;
  width: 60px;
  height: 60px;
  /* border-radius: 50%; */
  position: absolute;
  object-fit: cover;
  /* background-image: url(../../assets/images/logo-users.png); */
  background-image: url(${BtnImageAdd}); 
  /* flex-shrink: 0; */
  background-size: cover;
  background-position: center;

`
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
  /* position: absolute; */
  padding: 6px 12px 6px 10px;
  background-color: #78e2f3;
  color: #fff;
  border-radius: 10px;
  margin-left: 1230px;
  vertical-align: middle;
  display: flex;
  gap: 5px;
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
export { BtnImgAdd, ListItem, Button, AddNewUser, IconAddUser, BtnAddUser, MdPersonAdd };
