import { CommonButton } from "./style";

const Button = ({ onClicked, text, className, icon }) => {
  return (
    // <CommonButton inputColor={inputColor}>
    // 	 <i className={icon}></i>
    // </CommonButton>
    <CommonButton onClick={onClicked} className={className}>
      {text} <i className={icon}></i>
    </CommonButton>
  );
};

export default Button;
