import React from "react";

import styles from "./Header.module.css";
import Safe from "../../assets/mask.png";

function Header() {
  return (
    <div className={styles.container}>
      <img src={Safe} alt="safe" className={styles.image} />
      <h2>
        Stay <span className={styles.primary}>SAFE</span>
      </h2>
    </div>
  );
}

export default Header;
