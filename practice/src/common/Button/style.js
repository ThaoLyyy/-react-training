import styled from "styled-components";

const CommonBtn = styled.div.attrs(() => ({ tabIndex: 0 }))`
  cursor: pointer;
  font-size: 20px;

  &.add {
    margin-left: 1250px;
    padding: 10px;
    background-color: #78e2f3;
    width: 30px;
    border-radius: 8px;
    /* margin-top: 90px; */
  }

  &.edit {
    position: absolute;
    font-size: 30px;
    color: #efc83f;
    /* margin-left: 112px; */
    border: none;
    cursor: pointer;
  }

  &.delete {
    /* margin-top: 10px;
    color: #c36c1c; */
    font-size: 30px;
    color: #f61212;
    margin-left: 160px;
    border: none;
    cursor: pointer;
  }
`;
export { CommonBtn };
