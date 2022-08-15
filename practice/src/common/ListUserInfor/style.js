import styled from "styled-components";

const ConstactList = styled.div`
  position: absolute;
  width: 450px;
  height: 225px;
  left: 350px;
  top: 271px;
  background: #ffdede;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 15px 15px;
`;
const CarBody = styled.div`
  display: grid;
  /* grid-template-columns: auto auto auto auto auto auto;
  padding: 10px; */
`;
const ImageWrapper = styled.div`
  /* grid-row: 1 / 4; */
  padding: 10px;
`;
const Image = styled.img`
  width: 165px;
  height: 165px;
  object-fit: fill;
  /* width: 197px;
  height: 204px;
  left: 383px;
  top: 288px; */
`;
const ItemInfo = styled.thead`
  list-style: none;
  position: absolute;
  left: 40.6%;
  right: 40.6%;
  top: 1%;
  line-height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  padding: 10px;
  /* list-style: none;
    position: absolute;
    list-style: none;
    position: absolute;
    left: 46.6%;
    right: 40.6%;
    top: 3%;
    line-height: 55px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000; */
`;
const NameItem = styled.tr`
  /* padding: 18px; */
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 16ch;
`;
const InforItem = styled.span`
  font-weight: 300;
`;
const BtnEdit = styled.button`
  position: absolute;
  font-size: 30px;
  color: #efc83f;
  margin-left: 112px;
  border: none;
  cursor: pointer;
`;
const BtnDel = styled.button`
  font-size: 30px;
  color: #f61212;
  margin-left: 160px;
  border: none;
  cursor: pointer;
`;
export {
  ConstactList,
  CarBody,
  ImageWrapper,
  Image,
  ItemInfo,
  NameItem,
  InforItem,
  BtnEdit,
  BtnDel,
};
