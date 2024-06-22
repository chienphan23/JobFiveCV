import { useQuery } from "@tanstack/react-query";
import { apiGetTopEmployers } from "./apiGetTopEmployers"
 
export const useGetTopEmployers = () => {
    const {
        data: listTopEmployers,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["listTopEmployers"],
        queryFn: () => apiGetTopEmployers(),
    });
 
    return { listTopEmployers, isLoading, error };
};