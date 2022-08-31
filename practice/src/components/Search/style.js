
import styled from "styled-components";

const StyleWrapper = styled.div`
  width: 100%;
  background-color: #e3e3e396;
  /* position: relative; */
  /* width: 75%; */
  /* left: 205px; */
`;
const StyleSearchHeader = styled.input`
  width: 350px;
  margin: 30px 20px 30px 600px;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgb(237 150 150 / 69%);
  border-radius: 20px;
  &:hover {
      border: 1px solid #78e2f3;
    }
`;
const StyleBtnIconSearch = styled.button`
  background-color: #ed9696;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 8px;
  margin: -15px;
  font-size: 14px;
  &:hover {
      background-color: #78e2f3;
      color: #fff;
      /* border: 1px solid #ed9696; */
    }
`;

export { StyleWrapper, StyleSearchHeader, StyleBtnIconSearch };
