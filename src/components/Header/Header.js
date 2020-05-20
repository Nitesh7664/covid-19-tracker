import React from "react";

import styles from "./Header.module.css";
import Safe from "../../assets/mask.png";

function Header() {
  return (
    <div className={styles.container}>
      <h1>
        Covid-19 <span className={styles.success}>Tracker</span>{" "}
      </h1>
      <img src={Safe} alt="safe" className={styles.image} />
      <h2>
        Stay <span className={styles.primary}>SAFE</span>
      </h2>
    </div>
  );
}

export default Header;
