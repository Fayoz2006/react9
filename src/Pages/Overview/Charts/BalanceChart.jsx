import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const BalanceChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Ethereum", "Dash", "BitCoin"],
    datasets: [
      {
        label: "",
        data: [18, 18, 64],
        backgroundColor: ["#F5FBFE", "#FAD679", "#018FFF"],
        borderWidth: 0,
        hoverOffset: 2,
      },
    ],
  };
  return <Doughnut style={{ width: "100%", height: "100%" }} data={data} />;
};
