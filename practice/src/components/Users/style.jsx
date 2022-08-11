import styled from 'styled-components'
import IconAddUser from "../../assets/images/add.png";

// const IconAddUser = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   /* position: absolute; */
//   object-fit: cover;
//   background-image: url(${IconAddUser}); 
// `;

const AddNewUser = styled.p`
    font-size :16px;
    font-family: 'Roboto';
    position: absolute;
    padding: 10px 20px 10px 20px;
    background-color: #78E2F3;
    color: #fff;
    border-radius: 10px;
    margin-left: 1225px;
`

const BtnAddUser = styled.button`
    /* background: bottom; */
    border:none;
    cursor: pointer;
    font-size :22px;
`
export {
    AddNewUser,
    IconAddUser,
    BtnAddUser
}