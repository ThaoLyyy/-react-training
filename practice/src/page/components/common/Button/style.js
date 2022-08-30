import styled from "styled-components";

const CommonButton = styled.div.attrs(() => ({ tabIndex: 0 }))`
  cursor: pointer;
  font-size: 22px;

  &.add {
    margin-left: 970px;
    padding: 10px;
    width: 30px;
    border-radius: 8px;
    color: #fff;
    background-color: #78e2f3;
    &:hover {
      background-color: #ed9696;
      color: #fff;
    }
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
