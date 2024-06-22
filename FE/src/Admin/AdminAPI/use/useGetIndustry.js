import { useQuery } from "@tanstack/react-query";
import apiGetIndustry from "../apiGetIndustry";

export const useGetIndustry = () => {
  const {
    data: industry,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["industry"],
    queryFn: async () => await apiGetIndustry(),
  });
  return { industry, isLoading, error };
};
