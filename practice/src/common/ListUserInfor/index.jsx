import React from "react";
import Button from "../Button";
import {
  ConstactList,
  CarBody,
  ImageWrapper,
  Image,
  ItemInfo,
  NameItem,
  InforItem,
} from "./style";
import { BiEdit } from "react-icons/bi";

const ListUserInfor = () => {
  return (
    // <div>
    <>
      <ConstactList>
        <CarBody>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <ItemInfo>
            <NameItem>
              Username:
              <InforItem>Nguyen Van A</InforItem>
            </NameItem>
            <NameItem>
              Phone:
              <InforItem>0123456789</InforItem>
            </NameItem>
            <NameItem>
              Email:
              <InforItem> anguyen@123gmail.com</InforItem>
            </NameItem>
            <NameItem>
              Address:
              <InforItem> Da Nang</InforItem>
            </NameItem>
          </ItemInfo>
        </CarBody>
      </ConstactList>
    </>
  );
};

export default ListUserInfor;
