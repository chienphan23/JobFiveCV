import { useQuery } from "@tanstack/react-query"
import { apiGetTopJobForHome } from "./apiGetTopJobForHome"
import { apiSearchJob } from "./apiSearchJob"

export const useGetSearchJob = ({industry, location, experience, minSalary, maxSalary, searchValue, typeJob}) => {
    const {data: listJobs, isLoading, error} = useQuery({
        queryKey: ['listJobResult'],
        queryFn: async () => await apiSearchJob(industry, location, experience, minSalary, maxSalary, searchValue, typeJob)
    })
    return {listJobs, isLoading, error}
}