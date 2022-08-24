import styled from "styled-components";

const CommonButton = styled.div.attrs(() => ({ tabIndex: 0 }))`
  /* background: bottom;
    border:none; */
  cursor: pointer;
  font-size: 22px;

  &.add {
    margin-left: 970px;
    padding: 10px;
    background-color: #78e2f3;
    width: 30px;
    border-radius: 8px;
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
