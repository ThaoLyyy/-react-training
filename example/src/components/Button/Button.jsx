import React from "react";
// import "./Button.css"
import styles from"./Button.module.css"

// style components
const Button = (props) => {
  // return <button className={`button ${props.className || ''}` }>{props.children}</button>; /**truyen html,... */
  return <button className={`${styles.button} ${props.secondary ? styles.buttonSecondary: ''}`}>{props.children}</button>; /**truyen html,... */
};

export default Button;
