import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <h4 className={styles.footer}>
        made with{" "}
        <span>
          <i class="fas fa-heart"></i>
        </span>
      </h4>
    </div>
  );
}

export default Footer;
