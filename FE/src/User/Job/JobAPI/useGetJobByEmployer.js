import { useQuery } from "@tanstack/react-query"
import { apiGetJobByEmployer} from "./apiGetJobByEmployer"
export const useGetJobByEmployer = (id) => {
    const {data: jobs, isLoading: isLoadingJob, error: errorJob} = useQuery({
        queryKey: ['jobs'],
        queryFn: () => apiGetJobByEmployer(id)
    })
    console.log(jobs)
    
    return {jobs, isLoadingJob, errorJob}
}