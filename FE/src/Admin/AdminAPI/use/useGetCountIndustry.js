import { useQuery } from "@tanstack/react-query";
import apiCountIndustry from "../apiCountIndustry";

export const useGetCountIndustry = () => {
  const {
    data: chartData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart1"],
    queryFn: async () => await apiCountIndustry(),
  });
  return { chartData, isLoading, error };
};
