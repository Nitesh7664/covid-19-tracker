import React from "react";
import cx from "classnames";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

function Cards({ data }) {
  if (!data) {
    return "loading...";
  } else {
    const { confirmed, deaths, recovered, lastUpdate } = data;
    return (
      <div className={styles.container}>
        {/* -------------confirmed--------------- */}
        <div className={cx(styles.card, styles.card_confirmed)}>
          <div className={cx(styles.card_title, styles.primary)}>Confirmed</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={confirmed.value} duration={2.5} />}
          </div>
          <p className={styles.bold}>Last Updated</p>
          <div className={styles.card_subtitle}>
            {new Date(lastUpdate).toDateString()}
          </div>
        </div>

        {/* ----------recovered----------- */}
        <div className={cx(styles.card, styles.card_recovered)}>
          <div className={cx(styles.card_title, styles.success)}>Recovered</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={recovered.value} duration={2.5} />}
          </div>
          <p className={styles.bold}>Last Updated</p>
          <div className={styles.card_subtitle}>
            {new Date(lastUpdate).toDateString()}
          </div>
        </div>

        {/* ------------deaths------------- */}
        <div className={cx(styles.card, styles.card_deaths)}>
          <div className={cx(styles.card_title, styles.danger)}>Deaths</div>
          <div className={styles.card_count}>
            {<CountUp start={0} end={deaths.value} duration={2.5} />}
          </div>
          <p className={styles.bold}>Last Updated</p>
          <div className={styles.card_subtitle}>
            {new Date(lastUpdate).toDateString()}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
