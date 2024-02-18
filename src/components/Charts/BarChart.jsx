import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "bar",
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
                text: 'Month',
                color: 'rgb(254,108,0)'
              },
              ticks: {
                color: 'blue'
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Percentage %',
                color: 'rgb(254,108,0)'
              },
              ticks: {
                color: 'blue',
                min: 0, 
                max: 100, 
                stepSize: 20 
              },
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'rgb(254,108,0)'
              }
            }
          }
        },
      });
    }
  }, [labels, datasets]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
