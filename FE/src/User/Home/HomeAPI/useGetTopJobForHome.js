
import { useQuery } from "@tanstack/react-query"
import { apiGetTopJobForHome } from "./apiGetTopJobForHome"

export const useGetTopJobForHome = (id) => {
    const {data: listJobs, isLoading, error} = useQuery({
        queryKey: ['listJobForHome'],
        queryFn: () => apiGetTopJobForHome(id)
    })
    return {listJobs, isLoading, error}
}