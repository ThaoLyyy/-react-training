import styled from "styled-components";

const Wrapper = styled.div`
  /* position: absolute;
  display: -webkit-box;
  width: calc(100% - 285px);
  height: auto;
  left: 285px;
  top: 0;
  background-color: #e3e3e396; */
  /* display: -webkit-box;
  left: 285px; */
  /* min-height: 100vh; */
  /* width: calc(100% - 20%); */
  top: 0;
  background-color: #e3e3e396;
  width: 100%;
  position: relative;
`;

const SearchHeader = styled.input`
  width: 350px;
  margin: 30px 20px 30px 650px;
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