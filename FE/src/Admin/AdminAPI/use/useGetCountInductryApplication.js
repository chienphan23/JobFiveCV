import { useQuery } from "@tanstack/react-query";
import apiCountIndustryApplications from "../apiCountIndustryApplications";

export const useGetCountInductryApplication = () => {
  const {
    data: chartData2,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chart2"],
    queryFn: async () => await apiCountIndustryApplications(),
  });
  // console.log(chartData2);
  return { chartData2, isLoading, error };
};
