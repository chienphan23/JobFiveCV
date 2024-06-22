import { useQuery } from "@tanstack/react-query";
import { apiGetInterested } from "./apiGetInterested";

export const useGetInterested = (id) => {
    const {
        data: jobInterested,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["jobInterested"],
        queryFn: () => apiGetInterested(id),
    });
    return { jobInterested, isLoading, error };
};
