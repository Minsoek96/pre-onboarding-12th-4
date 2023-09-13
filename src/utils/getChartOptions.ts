import { TooltipItem } from "chart.js";
import { ChartData } from "../hooks/useChartDataFetch";

export const getChartOptions = (data: ChartData[]) => {
  return {
    scales: {
      y1: {
        min: 0,
        max: 200,
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
        enabled: true,
        bodySpacing: 5,
        callbacks: {
          label: (tooltipItem: TooltipItem<"line" | "bar">) => {
            const dataIndex = tooltipItem.dataIndex;
            const dataItem = data[dataIndex];
            if (dataItem) {
              return [
                `id: ${dataItem.id}`,
                `value_area: ${dataItem.value_area}`,
                `value_bar: ${dataItem.value_bar}`,
              ];
            }
          },
        },
      },
    },
  };
};