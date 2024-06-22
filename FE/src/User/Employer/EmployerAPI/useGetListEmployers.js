import { useQuery } from "@tanstack/react-query";
import { apiGetListEmployers } from "./apiGetListEmployers";

export const useGetListEmployers = () => {
    const {
        data: listEmployers,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["listEmployers"],
        queryFn: () => apiGetListEmployers(),
    });

    return { listEmployers, isLoading, error };
};
