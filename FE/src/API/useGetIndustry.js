import { useQuery } from "@tanstack/react-query"
import { apiGetIndustry } from "./apiGetIndustry"

export const useGetIndustry = () => {
    const {data: listIndustry, isLoading, error} = useQuery({
        queryKey: ['industry'],
        queryFn: () => apiGetIndustry()
    })
    return {listIndustry, isLoading, error}
}