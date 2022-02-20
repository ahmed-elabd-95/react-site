import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const Backdrop = ({ show, close }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackdrop : null}`}
      onClick={close}
    ></div>
  );
};

const Overlap = ({ show, addNewUserHandler , exitModal}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    type: "boy",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewUserHandler({
      id: Math.round(Math.random() * 100),
      name: input.name,
      age: input.age,
      address: input.address,
      phone: input.phone,
      type: input.type,
    });
    setInput({
      name: "",
      age: "",
      address: "",
      phone: "",
      type: "boy",
    });
    exitModal();
  };
  return (
    <div className={`${styles.overLap} ${show ? styles.showOverLab : null}`}>
      <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={input.name}
            onChange={inputHandler}
            placeholder="Enter Name"
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={input.age}
            onChange={inputHandler}
            placeholder="Enter Age"
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={input.address}
            onChange={inputHandler}
            placeholder="Enter Address"
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            value={input.phone}
            onChange={inputHandler}
            placeholder="Enter Phone"
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="type">Type</label>
          <select id="type" value={input.type} onChange={inputHandler}>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
        </Form.Controller>
        <div>
          <Button type="submit">Submit</Button>
          <Button type='reset'>Reset</Button>
        </div>
      </Form>
    </div>
  );
};
const Modal = ({ show, closeModal, addNewUserHandler, exitModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop close={closeModal} show={show} />
          <Overlap show={show} addNewUserHandler={addNewUserHandler}  exitModal={exitModal}/>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
