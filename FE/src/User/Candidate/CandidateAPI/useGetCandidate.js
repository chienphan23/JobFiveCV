import { useQuery } from "@tanstack/react-query";
import { apiGetCandidate } from "./apiGetCandidate";

export const useGetCandidate = (id) => {
    const {
        data: candidate,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["candidate"],
        queryFn: () => apiGetCandidate(id),
    });
    return { candidate, isLoading, error };
};
