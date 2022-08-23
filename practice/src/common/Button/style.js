import styled from "styled-components";

const CommonButton = styled.div.attrs(() => ({ tabIndex: 0 }))`
  cursor: pointer;
  font-size: 20px;

  &.add {
    padding: 10px;
    background-color: #78e2f3;
    width: 30px;
    border-radius: 8px;
    float: right;
    align-items: center;
    margin: 0px 300px 0 0;
    display: flex;
  }

  &.edit {
    position: absolute;
    font-size: 30px;
    color: #efc83f;
    border: none;
    cursor: pointer;
  }

  &.delete {
    font-size: 30px;
    color: #f61212;
    margin-left: 160px;
    border: none;
    cursor: pointer;
  }
`;
export { CommonButton };
