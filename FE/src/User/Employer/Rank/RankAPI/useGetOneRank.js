import { useQuery } from "@tanstack/react-query";
import { apiGetOneRank } from "./apiGetOneRank";

export const useGetOneRank = (id) => {
    const {
        data: rank,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["rank"],
        queryFn: () => apiGetOneRank(id),
    });
    return { rank, isLoading, error };
};
