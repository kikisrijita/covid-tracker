import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export const PieChart = () => {
  const [worldwideDetails, setWorldwideDetails] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  });

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api`)
      .then((res) => res.json())
      .then((data) => {
        setWorldwideDetails({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
        });
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <Doughnut
        data={{
          datasets: [
            {
              label: "Points",
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              data: [
                worldwideDetails.confirmed,
                worldwideDetails.recovered,
                worldwideDetails.deaths,
              ],
            },
          ],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ["Confirmed", "Recovered", "Death"],
        }}
        options={{
          cutoutPercentage: 50,
          animation: {
            animateScale: true,
          },
        }}
      />
    </div>
  );
};
