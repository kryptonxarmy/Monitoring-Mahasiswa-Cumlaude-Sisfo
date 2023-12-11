import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ["Memenuhi", "Belum Memenuhi"],
          datasets: [
            {
              data: [100, 120],
              backgroundColor: ["#DE3A3B", "#37AF57"],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "right", // Adjust the position as needed (top, right, bottom, left)
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
