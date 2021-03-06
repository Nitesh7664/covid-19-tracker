import React from "react";

import { Cards, CountryPicker, Chart, Header, Footer } from "./components";
import { fetchData } from "./api";

import styles from "./app.module.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      country: "",
    };
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
