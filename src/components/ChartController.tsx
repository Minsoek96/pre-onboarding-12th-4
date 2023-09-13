import React from "react";
import styled from "styled-components";

interface ChartControllerProps {
  chartBtnString: string[];
  changeSelectId: (id: string) => void;
  selectChartBtn: string;
}
const ChartControlBtns = ({
  chartBtnString,
  changeSelectId,
  selectChartBtn,
}: ChartControllerProps) => {
  return (
    <S.Container>
      {chartBtnString.map((id) => (
        <S.Button
          key={id}
          isSelect={selectChartBtn === id}
          onClick={(e) => changeSelectId(id)}
        >
          {id}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default ChartControlBtns;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
    width: 100%;
    gap: 15px;
  `,
  Button: styled.button<{ isSelect: boolean }>`
    background-color: ${(props) => (props.isSelect ? "#df1f1fc3" : "#326db1")};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
  `,
};
