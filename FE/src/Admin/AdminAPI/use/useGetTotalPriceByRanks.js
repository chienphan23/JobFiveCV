import { useQuery } from "@tanstack/react-query";

import apiTotalPriceByRanks from "../apiTotalPriceByRanks";

export const useGetTotalPriceByRanksjs = () => {
  const {
    data: chartData4,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart4"],
    queryFn: async () => await apiTotalPriceByRanks(),
  });
  return { chartData4, isLoading, error };
};
