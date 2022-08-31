import styled from "styled-components";

const StyleListItem = styled.div`
  width: 1024px;
  /* height: auto; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-left: 20px;
  margin-top: 40px;
`;
const StyleItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  margin-bottom: 30px;
  background: #ffdede;
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 10px;
  /* flex: 0.2 1; */
`;
const StyleImageWrapper = styled.div`
  display: flex;
  flex-direction: column; ;
`;
const StyleImageItem = styled.img`
  width: 165px;
  height: 165px;
  object-fit: fill;
  padding: 15px;
`;
const StyleInforItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  width: 270px;
`;

const StyleDetailInfor = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 3;
`;

const StyleIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const FontAwesomeIcon = styled.button`
  font-size: 25px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) => (props.edit ? "#A3A0C2" : "#efc83f")};
`;
export {
  StyleListItem,
  StyleItem,
  StyleImageWrapper,
  StyleImageItem,
  StyleInforItem,
  StyleDetailInfor,
  StyleIcon,
  FontAwesomeIcon,
};
