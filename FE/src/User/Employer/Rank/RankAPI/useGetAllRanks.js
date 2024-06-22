import { useQuery } from "@tanstack/react-query";
import { apiGetAllRanks } from "./apiGetAllRanks";

export const useGetAllRanks = () => {
    const {
        data: listRank,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allRanks"],
        queryFn: () => apiGetAllRanks(),
    });
    return { listRank, isLoading, error };
};
