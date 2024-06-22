import { useQuery } from "@tanstack/react-query";
import { apiGetEmployer } from "./apiGetEmployer";

export const useGetEmployerByJob = (employerId, jobId) => {
  const {
    data: employerCurrent,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["EmployerId" + jobId],
    queryFn: async () => await apiGetEmployer(employerId),
  });

  return { employerCurrent, isLoading, error };
};
