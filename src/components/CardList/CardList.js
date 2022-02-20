import React from "react";
import Card from "../Card/Card";
const CardList = ({ namesList, deletFunc, className }) => {
  const cards = namesList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deletFunc={deletFunc} />
  ));

  return <div className={className}>{cards}</div>;
};
export default CardList;
