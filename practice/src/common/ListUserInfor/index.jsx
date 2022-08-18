import { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
// import { listUsers } from "../../../data";
import { StoreContext } from "../../store";
import Button from "../Button";
// import {
//   ListItem,
//   ConstactList,
//   CarBody,
//   ImageWrapper,
//   Image,
//   ItemInfo,
//   NameItem,
//   InforItem,
//   BtnEdit,
//   BtnDel,
// } from "./style";

import {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem ,
  DescrItem,
  BtnIcon,
  BtnEdit,
  BtnDel,
} from "./style";

const ListUserInfor = () => {
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "Nguyen Van A",
  //     email: "anguyen123@mail.com",
  //     phone: "(+84)5555-2222",
  //     address: "89 HC, DN",
  //   },
  //   {
  //     id: 2,
  //     username: "Le Thi B",
  //     email: "ble456@mail.com",
  //     phone: "(+84)4555-5735",
  //     address: "57 DD, HN",
  //   },
  //   {
  //     id: 3,
  //     username: "Phan Thi C",
  //     email: "cphan789@mail.com",
  //     phone: "(+84)6555-9931",
  //     address: "25 BT,HCM",
  //   },
  //   {
  //     id: 4,
  //     username: "Dang Van D",
  //     email: "ddang333@mail.com",
  //     phone: "(+84)6619-5731",
  //     address: "67 TT, QN",
  //   },
  //   {
  //     id: 5,
  //     username: "Tran Van E",
  //     email: "etran555@mail.com",
  //     phone: "(+84)6631-2097",
  //     address: "73 LD, DL",
  //   },
  // ]);

  // const [state, dispatch] = useStore(StoreContext)

  // const [state, dispatch] = useStore(StoreContext)

  // let InforUsers = [].concat(listUsers, state.users)
  // console.log(InforUsers)

  // localStorage.setItem('listProduct', JSON.stringify(InforUsers))
  // let listUser = JSON.parse(localStorage.getItem('listUser'))
  // console.log(listUser)

  // -----------
  const { users } = useContext(StoreContext);
  const [show, setShow] = useState(false);
  console.log(users);
  // Show DeletePopup
  const handleOpen = () => {
    setShow(!show);
  };
  // Close DeletePopup
  const handleClose = () => {
    setShow(false);
  };

  // return (
  // <h1>aaaa</h1>

  // <ListItem>
  //   {users.map((user, index) => (
  //     <ConstactList key={index}>
  //       {/* <CarBody>
  //         <ImageWrapper>
  //           <Image src={user.userImg} />
  //         </ImageWrapper>
  //         <ItemInfo>
  //           <NameItem>
  //             Username:
  //             <InforItem> Nguyen Van A</InforItem>
  //           </NameItem>
  //           <NameItem>
  //             Phone:
  //             <InforItem> 0123456789</InforItem>
  //           </NameItem>
  //           <NameItem>
  //             Email:
  //             <InforItem> anguyen@123gmail.com</InforItem>
  //           </NameItem>
  //           <NameItem>
  //             Address:
  //             <InforItem> Da Nang</InforItem>
  //           </NameItem>
  //           <BtnEdit>
  //             <FaEdit />
  //           </BtnEdit>
  //           <BtnDel onClicked={handleOpen}>
  //             <RiDeleteBinLine />
  //           </BtnDel>

  //         </ItemInfo>
  //       </CarBody> */}
  //     </ConstactList>
  //   ))}
  // </ListItem>
  // );

  // ====
  return (
    <ListItem>
      {users.map((user, index) => (
        <Item key={index}>
          <ImageWrapper>
            <ImageItem src={user.userImage} />         
          </ImageWrapper>
          <InforItem >
            <DescrItem>Username: {user.userName} </DescrItem>
            <DescrItem>Phone: {user.userPhone}</DescrItem>
            <DescrItem>Email: {user.userEmail}</DescrItem>
            <DescrItem>Address: {user.userAddress}</DescrItem>
            <BtnIcon>
              <BtnEdit className="edit">
                <FaEdit />
              </BtnEdit>
              <BtnDel className='delete'>
                <RiDeleteBinLine />
              </BtnDel>
              {/* <Button className='edit' icon='fas fa-edit'>  */}
              {/* </Button> */}
              {/* <Button
                            onClicked={handleOpen}
                            className='delete'
                            icon='fas fa-trash-alt'
                        > */}

              {/* </Button> */}
              {/* {show && <DeletePopup onClosePopup={handleClose} />} */}
            </BtnIcon>
          </InforItem>
        </Item>
      ))}
    </ListItem>
  );
};

export default ListUserInfor;
