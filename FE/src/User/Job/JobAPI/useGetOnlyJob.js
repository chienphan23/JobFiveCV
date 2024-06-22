import { useQuery } from "@tanstack/react-query";
import { apiGetJob } from "./apiGetJob";
export const useGetOnlyJob = (id) => {
    const {
        data: job,
        isLoading: isLoadingJob,
        error: errorJob,
    } = useQuery({
        queryKey: ["JobOnly" + id],
        queryFn: () => apiGetJob(id),
    });

    return { job, isLoadingJob, errorJob };
};
