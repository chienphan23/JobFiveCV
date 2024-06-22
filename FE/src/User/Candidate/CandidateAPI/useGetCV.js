import { useQuery } from "@tanstack/react-query";
import { apigetCV } from "./apiGetCV";

export const useGetCV = (id) => {
    const {
        data: cvs,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["cvs"],
        queryFn: () => apigetCV(id),
    });
    // console.log("alo" + id);
    return { cvs, isLoading, error };
};
