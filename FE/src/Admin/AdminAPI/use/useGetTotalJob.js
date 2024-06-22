import { useQuery } from "@tanstack/react-query";
import apiTotalJob from "../apiTotalJob";

export const useGetTotalJob = () => {
  const {
    data: chartData4,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart4"],
    queryFn: async () => await apiTotalJob(),
  });
  return { chartData4, isLoading, error };
};
