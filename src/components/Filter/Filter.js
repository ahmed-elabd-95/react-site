import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");

  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);
  };
  return (
    <div className={styles.inputBottom}>
      <input
        type="text"
        placeholder="Filter by name"
        className={styles.filterInput}
        value={filter}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
