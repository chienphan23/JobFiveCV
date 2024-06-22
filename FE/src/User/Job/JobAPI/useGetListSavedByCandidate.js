import { useQuery } from "@tanstack/react-query";
import { apiGetListSavedByCandidate } from "./apiGetListSavedByCandidate";
export const useGetListSavedByCandidate = (candidateId, jobId) => {
    const {
        data: listSaved,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["listSaved" + jobId],
        queryFn: () => apiGetListSavedByCandidate(candidateId, jobId),
    });

    return { listSaved, isLoading, error };
};
