import React, { useState, useEffect } from "react";
import { fetchCountries, fetchData } from "../../api";

import styles from "./CountryPicker.module.css";

function CountryPicker({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountries(await fetchCountries());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Pick a Country :</h3>
      <select
        onChange={(e) => handleCountryChange(e.target.value)}
        className={styles.select_box}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}

export default CountryPicker;
