import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  const [chartData, setChartData] = useState({});

  let showChart = () => {
    let chartObj = {
      datasets: [
        {
          label: "Confirmed",
          borderColor: "rgba(75, 192, 192, 1)",
          data: [],
          fill: false,
        },
        {
          label: "Recovered",
          borderColor: "rgba(255, 206, 86, 1)",
          data: [],
          fill: false,
        },
        {
          label: "Deaths",
          borderColor: "rgba(255, 99, 132, 1)",
          data: [],
          fill: false,
        },
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["jan", "feb", "march", "april", "may"],
    };

    fetch(`https://disease.sh/v2/historical/all?lastdays=30`)
      .then((res) => res.json())
      .then((data) => {
        const confirmedArr = Object.values(data.cases).map((el) => el);
        chartObj.datasets[0].data = confirmedArr;
        console.log(1, confirmedArr);
        const recoveredArr = Object.values(data.recovered).map((el) => el);
        chartObj.datasets[1].data = recoveredArr;

        const deathsArr = Object.values(data.deaths).map((el) => el);
        chartObj.datasets[2].data = deathsArr;

        setChartData(chartObj);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    showChart();
  }, []);
  // console.log(datewiseDetails);

  return (
    <div>
      <br />
      <br />
      <h3 className="heading-primary">Monthly record:</h3>
      <Line
        className="line-chart"
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  max: 1500000,
                  min: 0,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
