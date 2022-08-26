import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: absolute;
  height: 1000px;
  width: 100%;
  z-index: 10;
  right: 1px;
  top: 2px;
`;
const Modal = styled.div`
  position: absolute;
  width: 700px;
  height: 300px;
  font-size: 36px;

  background-color: #ffafaf;
  z-index: 39;
  font-family: "Roboto";
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 50px;
`;
const Content = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 46px;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  border-radius: 10px;
  font-size: 16px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.yes ? "#f13d3d" : "#CFC5C5")};
`;
export { ModalWrapper, Modal, Title, Content, ButtonWrapper, Button };
