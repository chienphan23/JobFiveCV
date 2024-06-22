
import { useQuery } from "@tanstack/react-query"
import { apiGetIndustriesForHome } from "./apiGetIndustriesForHome"

export const useGetIndustriesForHome = () => {
    const {data: listIndustries, isLoading, error} = useQuery({
        queryKey: ['listIndustriesForHome'],
        queryFn: () => apiGetIndustriesForHome()
    })
    return {listIndustries , isLoading, error}
}