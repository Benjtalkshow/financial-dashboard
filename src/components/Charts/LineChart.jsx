import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  const color = "rgb(254,108,0)";

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Month",
                color: "rgb(254,108,0)",
              },
              ticks: {
                color: "blue",
              },
              grid: {
                color: "rgb(244,234,249)",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Amount",
                color: "rgb(254,108,0)",
              },
              ticks: {
                color: "blue",
              },
              grid: {
                color: "rgb(244,234,249)",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "rgb(254,108,0)",
              },
            },
          },
        },
      });
    }
  }, [labels, datasets]);

  return <canvas ref={chartRef} style={{ backgroundColor: "white" }} />;
};

export default LineChart;
