import { Chart } from "react-chartjs-2";
import React, { useState } from "react";
import { useChartDataFetch } from "../hooks/useChartDataFetch";
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
  Title,
  Filler,
} from "chart.js";
import ChartController from "./ChartController";
import { ChartDataManager } from "../services/ChartDataManage";
import { getChartOptions } from "../utils/getChartOptions";
import { getChartData } from "../utils/getChartData";
import styled from "styled-components";

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
  const { chartData, isLoading } = useChartDataFetch();
  const [selectChartBtn, setSelectChartBtn] = useState("");
  const chartManger = new ChartDataManager(chartData, selectChartBtn);
  const chartBtnString = chartManger.getUniqueString();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = getChartData(chartManger);
  const options = getChartOptions(chartData);
  const changeSelectId = (id: string) => {
    const isSelectValueMatch = id === selectChartBtn;
    if (isSelectValueMatch) {
      setSelectChartBtn("");
      return;
    }
    setSelectChartBtn(id);
  };

  return (
    <S.Container>
      <Chart type="bar" data={data} options={options} />
      <ChartController
        selectChartBtn={selectChartBtn}
        chartBtnString={chartBtnString}
        changeSelectId={changeSelectId}
      ></ChartController>
    </S.Container>
  );
};

export default ChartComponent;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 500px;
    margin-top: 150px;
  `
}