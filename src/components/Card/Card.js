import React from "react";
import styles from "./Card.module.css";
const Card = ({ deletFunc, name, age, address, phone, id, type }) => {
  return (
    <>
      <div
        className={styles.cardWapper}
        style={{ backgroundColor: type === "girl" ? "#bdafb1" : "#1c1d20" }}
      >
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Address: {address}</div>
        <div>Phone: {phone}</div>
        <div className={styles.deleteBtn} onClick={(e) => deletFunc(e, id)}>
          x
        </div>
      </div>
    </>
  );
};

export default Card;
