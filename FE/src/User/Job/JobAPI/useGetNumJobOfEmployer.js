import { useQuery } from "@tanstack/react-query";
import { apiGetJob } from "./apiGetJob";
import { apiGetNumJobOfEmployer } from "./apiGetNumJobOfEmployer";
export const useGetNumJobOfEmployer = (employerId) => {
    const {
        data: numJob,
        isLoading: isLoadingNumJob,
    } = useQuery({
        queryKey: ["numJob" + employerId],
        queryFn: () => apiGetNumJobOfEmployer(employerId),
    });

    return { numJob, isLoadingNumJob };
};
