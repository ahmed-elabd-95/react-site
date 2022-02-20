import React from "react";
import styles from "./Form.module.css";

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={styles.cardsBtn}
      onClick={props.onClick}
      type={`${props.type ? props.type : "button"}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
