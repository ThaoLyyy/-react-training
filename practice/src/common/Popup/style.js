import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 1000px;
  width: 100%;
  z-index: 10;
  right: 1px;
  top: 2px;
`;
const ModalUser = styled.div`
  position: absolute;
  width: 450px;
  height: 575px;
  background: #ffafaf;
  font-family: "Roboto";
  z-index: 39;
  border-radius: 10px;
  left: 55%;
  top: 45%;
  transform: translate(-50%, -50%);
  line-height: 44px;
  padding: 10px;
`;
const Title = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 36px;
`;
const FormSubmit = styled.form`
  margin-left: 55px;
`;
const Label = styled.p`
  font-size: 16px;
`;
const InputUser = styled.input`
  width: 323px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

const Errors = styled.p`
  color: red;
  text-align: center;
  line-height: 8px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;
const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  border-radius: 10px;
  background-color: ${(props) => (props.save ? "#78E2F3" : "#C6C5CC")};
`;
export {
  ModalWrapper,
  ModalUser,
  Title,
  FormSubmit,
  Label,
  InputUser,
  Errors,
  BtnWrapper,
  Btn,
};
