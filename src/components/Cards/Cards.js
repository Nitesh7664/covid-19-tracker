import React from "react";
import styles from "./Cards.module.css";

function Cards({ data }) {
  if (!data) {
    console.log("hello");
    return "loading...";
  } else {
    const { confirmed, deaths, recovered } = data;
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_title}>Confirmed</div>
          <div className={styles.card_count}>{confirmed.value}</div>
        </div>
      </div>
    );
  }
}

export default Cards;
