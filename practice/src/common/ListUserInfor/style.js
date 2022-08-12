import styled from "styled-components";

const ConstactList = styled.div`
  position: absolute;
  width: 500px;
  height: 274px;
  left: 350px;
  top: 271px;
  background: #ffdede;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 15px 30px;
`;
const CarBody = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
`;
const ImageWrapper = styled.div`
  grid-row: 1 / 4;
`;
const Image = styled.img`
  width: 197px;
  height: 204px;
  left: 383px;
  top: 288px;
`;
const ItemInfo = styled.ul``;
const NameItem = styled.li`
  padding: 18px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 16ch;
`;
const InforItem = styled.span`
  font-weight: 300;
`;
export {
  ConstactList,
  CarBody,
  ImageWrapper,
  Image,
  ItemInfo,
  NameItem,
  InforItem,
};
