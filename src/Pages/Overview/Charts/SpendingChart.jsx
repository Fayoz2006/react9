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
} from 'chart.js';
import { Line } from "react-chartjs-2";

export const SpendinChart = () => {
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
 
  const labels = [2, 4, 6, 8, 10, 12, 14, 16];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Spending",
        data: [2000, 2300, 4000, 5000, 4500, 6000, 7000],
        fill: true,
        backgroundColor: `rgba(0, 151, 232, 0.2)`,
        borderColor: `rgba(1, 143, 255, 1)`,
        pointBackgroundColor: `rgba(1, 143, 255, 1)`,
        pointBorderColor: `rgba(1, 143, 255, 0.2)`,
        tension: 0.1,
      },
    ],
  };
  return <Line style={{ width: "100%", height: "100%" }} data={data}/>;
};
