import { useState, useEffect } from "react";
import axios from "axios";

export interface ChartData {
  time: string;
  id: string;
  value_area: number;
  value_bar: number;
}

export const useChartDataFetch = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/");
        const data = response.data;
        const newData = Object.keys(data).map((key) => ({
          time: key,
          ...data[key],
        }));
        setChartData(newData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return { chartData, isLoading, isError };
};
