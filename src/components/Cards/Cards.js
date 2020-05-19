import React from "react";
import cx from "classnames";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

function Cards({ data }) {
  if (!data) {
    return "loading...";
  } else {
    const { confirmed, deaths, recovered } = data;
    return (
      <div className={styles.container}>
        <div className={cx(styles.card, styles.card_confirmed)}>
          <div className={styles.card_title}>Confirmed</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={confirmed.value} duration={2.5} />}
          </div>
        </div>
        <div className={cx(styles.card, styles.card_recovered)}>
          <div className={styles.card_title}>Recovered</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={recovered.value} duration={2.5} />}
          </div>
        </div>
        <div className={cx(styles.card, styles.card_deaths)}>
          <div className={styles.card_title}>Deaths</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={deaths.value} duration={2.5} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
