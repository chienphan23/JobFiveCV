import { useQuery } from "@tanstack/react-query";
import { apiGetCvApplication } from "./apiGetCvApplication";

export const useGetCvApplication = (candidateId, jobId) => {
    const {
        data: applicationCv,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["applicationCv" + jobId],
        queryFn: () => apiGetCvApplication(candidateId, jobId),
    });
    return { applicationCv, isLoading, error };
};
