import React from "react";
import styles from "./App.module.css";
import ComponentApp from "./components/ComponentApp/ComponentApp.js";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <ComponentApp />
      </header>
    </div>
  );
}

export default App;
