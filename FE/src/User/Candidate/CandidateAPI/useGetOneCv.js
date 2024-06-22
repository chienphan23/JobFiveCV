import { useQuery } from "@tanstack/react-query";
import { apiGetOneCv } from "./apiGetOneCv";

export const useGetOneCv = (id) => {
    const {
        data: cv,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["cv"],
        queryFn: () => apiGetOneCv(id),
    });
    return { cv, isLoading, error };
};
