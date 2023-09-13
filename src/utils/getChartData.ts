import { ChartDataManager } from "../services/ChartDataManage";

export const getChartData = (chartManger: ChartDataManager) => {
  return {
    labels: chartManger.getLabel(),
    datasets: [
      {
        yAxisID: "y1",
        data: chartManger.getAreaData(),
        type: "line" as const,
        label: "value_area",
        borderWidth: 1,
        borderColor: "rgb(168, 28, 28)",
        tension: 0.5,
        pointRadius: 0,
        fill: true,
        backgroundColor: "rgba(126, 64, 64, 0.288)",
      },
      {
        yAxisID: "y2",
        data: chartManger.getBarData(),
        type: "bar" as const,
        label: "Value Bar",
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: chartManger.getSelectMatch(),
      },
    ],
  };
};
