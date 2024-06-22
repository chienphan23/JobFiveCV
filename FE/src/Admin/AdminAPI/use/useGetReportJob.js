import { useQuery } from "@tanstack/react-query";
import apoGetReportJob from "../apoGetReportJob";

export const useGetReportJob = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["report"],
    queryFn: async () => await apoGetReportJob(),
  });
  return { data, isLoading, error };
};
