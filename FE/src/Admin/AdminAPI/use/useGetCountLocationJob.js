import { useQuery } from "@tanstack/react-query";
import apiCountLocationJob from "../apiCountLocationJob";

export const useGetCountLocationJob = () => {
  const {
    data: chartData3,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart3"],
    queryFn: async () => await apiCountLocationJob(),
  });
  return { chartData3, isLoading, error };
};
