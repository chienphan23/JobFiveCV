
import { useQuery } from "@tanstack/react-query"
import { apiGetIndustriesForHome } from "./apiGetIndustriesForHome"
import { apiGetQuantityJobOfIndustry } from "./apiGetQuantityJobOfIndustry"

export const useGetQuantityJobOfIndustry = (id) => {
    const {data: quantityJob, isLoading, error} = useQuery({
        queryKey: ['quantityJob' + id],
        queryFn: () => apiGetQuantityJobOfIndustry(id)
    })
    return {quantityJob , isLoading, error}
}