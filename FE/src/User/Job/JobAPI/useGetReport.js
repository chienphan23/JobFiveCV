import { useQuery } from "@tanstack/react-query";
import { apiGetReport } from "./apiGetReport";

export const useGetReport = (candidateId, jobId) => {
    const {
        data: report,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["report" + jobId],
        queryFn: () => apiGetReport(candidateId, jobId),
    });
    return { report, isLoading, error };
};
