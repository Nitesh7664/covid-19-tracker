import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import { Line, Bar } from "react-chartjs-2";

function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);
    fetchData();
  }, [setDailyData]);

  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#22f",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#f22",
            backgroundColor: "rgba(2, 2, 255, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}

export default Chart;
