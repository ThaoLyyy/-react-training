import styled from "styled-components";

const Wrapper = styled.div`
  /* position: fixed;
  width: calc(100% - 340px);
  height: auto;   
  left: 340px; */
  position: absolute;
  display: -webkit-box;
  width: calc(100% - 285px);
  height: auto;
  left: 285px;
  top: 0;
  background-color: #e3e3e396;
`;

const SearchHeader = styled.input`
  width: 350px;
  /* width: 30%; */
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
  /* margin: 0 5px; */
`;

export { Wrapper, SearchHeader, BtnIconSearch };
