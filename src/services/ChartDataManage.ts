import { ChartData } from "../hooks/useChartDataFetch";

export class ChartDataManager {
  private data;
  private isSelect;
  constructor(data: ChartData[], isSelect: string) {
    this.data = data;
    this.isSelect = isSelect;
  }

  getLabel() {
    return this.data.map((item) => item.time);
  }

  getUniqueString() {
    return Array.from(new Set(this.data.map((a) => a.id)));
  }

  getAreaData() {
    return this.data.map((item) => item.value_area);
  }

  getBarData() {
    return this.data.map((item) => item.value_bar);
  }

  getSelectMatch() {
    return this.data.map((item) =>
      item.id === this.isSelect
        ? "rgba(34, 155, 230, 0.938)"
        : "rgba(53, 162, 235, 0.5)"
    );
  }
}
