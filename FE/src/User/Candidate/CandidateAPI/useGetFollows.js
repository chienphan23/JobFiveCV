import { useQuery } from "@tanstack/react-query";
import { apiGetFollows } from "./apiGetFollows";

export const useGetFollows = (id) => {
    const {
        data: follows,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["follows"],
        queryFn: () => apiGetFollows(id),
    });
    return { follows, isLoading, error };
};
