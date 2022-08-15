import React, { useState } from "react";
import Button from "../Button";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  ConstactList,
  CarBody,
  ImageWrapper,
  Image,
  ItemInfo,
  NameItem,
  InforItem,
  BtnEdit,
  BtnDel,
} from "./style";

const ListUserInfor = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Nguyen Van A",
      email: "anguyen123@mail.com",
      phone: "(+84)5555-2222",
      address: "89 HC, DN",
    },
    {
      id: 2,
      username: "Le Thi B",
      email: "ble456@mail.com",
      phone: "(+84)4555-5735",
      address: "57 DD, HN",
    },
    {
      id: 3,
      username: "Phan Thi C",
      email: "cphan789@mail.com",
      phone: "(+84)6555-9931",
      address: "25 BT,HCM",
    },
    {
      id: 4,
      username: "Dang Van D",
      email: "ddang333@mail.com",
      phone: "(+84)6619-5731",
      address: "67 TT, QN",
    },
    {
      id: 5,
      username: "Tran Van E",
      email: "etran555@mail.com",
      phone: "(+84)6631-2097",
      address: "73 LD, DL",
    },
  ]);
  return (
    <React.Fragment>
      <>
        <ConstactList>
          <CarBody>
            <ImageWrapper>
              <Image />
            </ImageWrapper>
            <ItemInfo>
              <NameItem>
                Username:
                <InforItem> Nguyen Van A</InforItem>
              </NameItem>
              <NameItem>
                Phone:
                <InforItem> 0123456789</InforItem>
              </NameItem>
              <NameItem>
                Email:
                <InforItem> anguyen@123gmail.com</InforItem>
              </NameItem>
              <NameItem>
                Address:
                <InforItem> Da Nang</InforItem>
              </NameItem>
              <BtnEdit>
                <FaEdit />
              </BtnEdit>
              <BtnDel>
                <RiDeleteBinLine />
              </BtnDel>
            </ItemInfo>
          </CarBody>
        </ConstactList>
      </>
      {/* ------- */}

      {/* <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a className="btn btn-success" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </a>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Users user={user}/>
            </tr>
          ))}
        </tbody>
      </table> */}
    </React.Fragment>
  );
};

export default ListUserInfor;
