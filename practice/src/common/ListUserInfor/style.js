
import styled from "styled-components";

const ListItem = styled.div`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 300px;
  margin: 70px 0px 0px 364px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 325px;
  margin-bottom: 30px;
  margin-left: 79px;
  background: #ffdede;
  border: 1px solid #fff;
  padding: 15px;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageItem = styled.img`
  width: 170px;
  height: 215px;

   object-fit: fill;
`;
const InforItem  = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  line-height: 50px;
`;
const NameItem = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #0f1a42;
`;
const DescrItem = styled.p`
  font-size: 19px;
  font-weight: 600;
`;

const BtnIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BtnEdit = styled.button`
  position: absolute;
  font-size: 30px;
  color: #efc83f;
  /* margin-left: 112px; */
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
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem ,
  NameItem,
  DescrItem,
  BtnIcon,
  BtnEdit,
  BtnDel,
};
