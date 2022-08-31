import { StyleCommonButton } from "./style";

const Button = ({ onClicked, text, className, icon }) => {
  return (
    <>
      <StyleCommonButton onClick={onClicked} className={className}>
        {text} <i className={icon}></i>
      </StyleCommonButton>
    </>
  );
};

export default Button;
