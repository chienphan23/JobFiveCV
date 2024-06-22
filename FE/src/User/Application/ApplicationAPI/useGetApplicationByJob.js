import { useQuery } from "@tanstack/react-query";
import { apiGetApplicationByJob } from "./apiGetApplicationByJob";

export const useGetApplicationByJob = (id) => {
    const {
        data: applications,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["ApplicationByJob" + id],
        queryFn: () => apiGetApplicationByJob(id),
    });

    return { applications, isLoading, error };
};
