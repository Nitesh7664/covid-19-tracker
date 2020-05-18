import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";

import styles from "./app.module.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
    console.log(this.state.data);
  }

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <div className={styles.container}>
        <h1>Covid-19 tracker</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
