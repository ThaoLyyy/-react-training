import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e3e3e396;
  position: relative;
  /* width: 75%; */
  /* left: 205px; */
`;
const SearchHeader = styled.input`
  width: 350px;
  margin: 30px 20px 30px 600px;
  padding: 10px 20px 10px 20px;
  border: 1px solid rgb(237 150 150 / 69%);
  border-radius: 20px;
`;
const BtnIconSearch = styled.button`
  background-color: #ed9696;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin: -15px;
  opacity: 0.9;
`;

export { Wrapper, SearchHeader, BtnIconSearch };
