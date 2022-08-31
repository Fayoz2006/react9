import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const MarketChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Spending",
        data: [2300, 7800, 4200, 6000, 3000, 9700],
        fill: false,
        backgroundColor: `rgba(0, 151, 232, 0.2)`,
        borderColor: `rgba(0, 151, 232, 1)`,
        pointBackgroundColor: `rgba(1, 143, 255, 1)`,
        pointBorderColor: `rgba(1, 143, 255, 0.2)`,
        tension: 0.1,
      },
    ],
  };
  return <Line style={{ width: "100%", height: "100%" }} data={data} />;
};
