import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export const LineChart = () => {
  const [datewiseDetails, setDatewiseDetails] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api`)
      .then((res) => res.json())
      .then((data) => {
        setDatewiseDetails({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
        });
      })
      .catch((err) => alert(err));
  }, []);
  console.log(datewiseDetails);

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              label: "Points",
              borderColor: ["rgba(75, 192, 192, 1)"],
              data: [
                datewiseDetails.confirmed,
                datewiseDetails.recovered,
                datewiseDetails.deaths,
              ],
            },
          ],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ["feb", "march", "april"],
        }}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  beginAtZero: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
