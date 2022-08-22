import { CommonBtn } from "./style";

const Button = ({ onClicked, text, className, icon }) => {
  return (

    <CommonBtn onClick={onClicked} className={className}>
      {text} 
      <i className={icon}></i>
    </CommonBtn>
  );
};

export default Button;
