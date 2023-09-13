import React from "react";
import { Chart } from "react-chartjs-2";
import { useChartData } from "../hooks/useChartData"; // 실제 훅 파일 경로로 바꾸세요
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  TooltipItem,
  Title,
  Filler,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Title,
  Filler
);

const ChartComponent = () => {
  const { chartData, isLoading } = useChartData();
  const label = chartData.map((item) => item.time);
  const uniqueIds = Array.from(new Set(chartData.map((a) => a.id)));
  console.log(uniqueIds)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = {
    labels: chartData.map((item) => item.time),
    datasets: [
      {
        yAxisID: "y1",
        data: chartData.map((item) => item.value_area),
        type: "line" as const,
        label: "value_area",
        borderWidth: 1,
        borderColor: "rgb(255, 152, 152)",
        tension: 0.5,
        pointRadius: 0,
        fill: true,
        backgroundColor: "rgba(255, 152, 152, 0.5)",
      },
      {
        yAxisID: "y2",
        data: chartData.map((item) => item.value_bar),
        type: "bar" as const,
        label: "Value Bar",
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    scales: {
      y1: {
        beginAtZero: true,
        position: "left" as const,
      },
      y2: {
        beginAtZero: true,
        position: "right" as const,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"bar">) => {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.parsed.y;
            const region = chartData[tooltipItem.dataIndex]?.id || "Unknown";
            return [`${label}: ${value}`, `Region: ${region}`];
          },
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default ChartComponent;
