import { useQuery } from "@tanstack/react-query";
import apiTotalCompanies from "../apiTotalCompaines";

export const useGetTotalCompanies = () => {
  const {
    data: chartData5,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart5"],
    queryFn: async () => await apiTotalCompanies(),
  });
  return { chartData5, isLoading, error };
};
