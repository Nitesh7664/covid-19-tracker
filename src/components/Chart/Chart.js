import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);
    fetchData();
  }, [setDailyData]);

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}

export default Chart;
