import styled from "styled-components";

const ListItem = styled.div`
  width: 1020px;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-left: 330px;
  margin-top: 40px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  margin-bottom: 30px;
  /* margin-left: 79px; */
  background: #ffdede;
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 10px;
  flex: 0.2 1;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageItem = styled.img`
  width: 165px;
  height: 165px;
  object-fit: fill;
  padding: 10px;
`;
const InforItem = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 20px; */
  line-height: 45px;
`;
// const NameItem = styled.p`
//   font-size: 28px;
//   font-weight: 700;
//   color: #0f1a42;
// `;
const DescrItem = styled.p`
  font-size: 16px;
  font-weight: 500;
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
const FontBtnIcon = styled.button`
  font-size: 25px;
  border: none;
  background-color: #78e2f3;
  margin-top: 10px;
  cursor: pointer;
`;

export {
  ListItem,
  Item,
  ImageWrapper,
  ImageItem,
  InforItem,
  DescrItem,
  BtnIcon,
  FontBtnIcon,
  BtnEdit,
  BtnDel,
};
