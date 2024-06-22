import { useQuery } from "@tanstack/react-query";
import { apiGetTimeLines } from "./apiGetTimeLine";

export const useGetTimeLine = (id) => {
    const {
        data: timeLines,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["timeLines"],
        queryFn: () => apiGetTimeLines(id),
    });
    return { timeLines, isLoading, error };
};
