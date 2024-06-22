import { useQuery } from "@tanstack/react-query";
import { apiGetEmployer } from "./apiGetEmployer";

export const useGetEmployer = (employerId) => {
    const {
        data: employerCurrent,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["Employer"+ employerId],
        queryFn: async () => await apiGetEmployer(employerId),
    });

    return { employerCurrent, isLoading, error };
};
