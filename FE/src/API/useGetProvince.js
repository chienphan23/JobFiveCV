import { useQuery } from "@tanstack/react-query"
import { apiGetProvince } from "./apiGetProvince"

export const useGetProvince = () => {
    const {data: listProvince, isLoading, error} = useQuery({
        queryKey: ['province'],
        queryFn: () => apiGetProvince()
    })
    return {listProvince, isLoading, error}
}