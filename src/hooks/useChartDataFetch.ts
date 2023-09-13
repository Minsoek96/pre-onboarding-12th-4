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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { chartData, isLoading };
};
