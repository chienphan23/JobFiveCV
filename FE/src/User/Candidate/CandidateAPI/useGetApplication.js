import { useQuery } from "@tanstack/react-query";
import { apiGetApplication } from "./apiGetApplication";

export const useGetApplication = (id) => {
    const {
        data: application,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["application"],
        queryFn: () => apiGetApplication(id),
    });
    return { application, isLoading, error };
};
