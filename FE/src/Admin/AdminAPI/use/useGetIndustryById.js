import { useQuery } from "@tanstack/react-query";
import { apiGetIndustryById } from "../apiGetIndustryById";

export const useGetIndustryById = (id) => {
  const {
    data: industry,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["industry" + id],
    queryFn: async () => await apiGetIndustryById(id),
  });
  return { industry, isLoading, error };
};
