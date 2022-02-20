import React, { useState } from "react";
import styles from "./ComponentApp.module.css";
import CardList from "../CardList/CardList";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";
import Button from "../Layout/Button";
const ComponentApp = () => {
  const [filter, setFilter] = useState("");
  const [toggleCard, setToggleCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([
    {
      id: 1000,
      name: "ahmed",
      age: 26,
      address: "Embaba",
      phone: "0101122333",
      type: "boy",
    },
    {
      id: 20000,
      name: "mona",
      age: 22,
      address: "Cairo",
      phone: "0101122333",
      type: "girl",
    },
    {
      id: 30000,
      name: "ali",
      age: 31,
      address: "Giza",
      phone: "0101122333",
      type: "boy",
    },
    {
      id: 4000,
      name: "samah",
      age: 25,
      address: "Dahab",
      phone: "0101122333",
      type: "girl",
    },
    {
      id: 50000,
      name: "ibrahim",
      age: 24,
      address: "Cairo",
      phone: "0101122333",
      type: "boy",
    },
  ]);

  const addNewUserHandler = (newData) => {
    setState((prevState) => setState([...prevState, newData]));
  };

  const deleteHandler = (e, selectedId) => {
    const deleteOberation = state.filter((el) => el.id !== selectedId);
    setState(deleteOberation);
  };

  const filterNames = (name) => {
    setFilter(name); 
  };
  const filterHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 style={{ color: "black" }}>Boys Data</h1>
        <Filter filteration={filterNames} />
        <div className={styles.rowButtons}>
          <Button
            onClick={() => setToggleCard(!toggleCard)}
            style={{ marginbottom: 10 }}
          >
            {toggleCard ? "Hide Cards" : "Show Cards"}
          </Button>
          <Button onClick={() => setShowModal(true)}>New Record</Button>
        </div>
        <div className={styles.cardsContainer}>
          <CardList
            namesList={filterHandler()}
            type="men"
            color="#0000"
            deletFunc={deleteHandler}
            className={toggleCard ? styles.show : styles.hide}
          />
        </div>
      </div>
      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        addNewUserHandler={addNewUserHandler}
        exitModal={() => setShowModal(false)}
      />
    </>
  );
};

export default ComponentApp;
