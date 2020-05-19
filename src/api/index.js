import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    var modifiedUrl = url;
    if (country) {
      modifiedUrl = `${url}/countries/${country}`;
    }
    const { data } = await axios.get(modifiedUrl);

    const modifiedData = {
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);

    return data.countries;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((data, i) => {
      return {
        confirmed: data.confirmed.total,
        deaths: data.deaths.total,
        date: data.reportDate,
      };
    });

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
