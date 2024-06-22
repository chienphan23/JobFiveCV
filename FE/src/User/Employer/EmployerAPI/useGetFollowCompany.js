import { useQuery } from "@tanstack/react-query";
import { apiGetFollowCompany } from "./apiGetFollowCompany";

export const useGetFollowCompany = (candidateId, employerId) => {
    const {
        data: followCompany,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["followCompany"],
        queryFn: () => apiGetFollowCompany(candidateId, employerId),
    });

    return { followCompany, isLoading, error };
};
