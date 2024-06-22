import { useQuery } from "@tanstack/react-query";
import { apiGetListCandidateByListId } from "./apiGetListCandidateByListId";

export const useGetListCandidateByListId = (ids) => {
    let {
        data: listCandidate,
        isLoadingListCandidate,
        error,
    } = useQuery({
        queryKey: ["listCandidates"],
        queryFn: () => apiGetListCandidateByListId(ids),
    });

    if (!ids) {
        isLoadingListCandidate = true;
    }

    return { listCandidate, isLoadingListCandidate, error };
};
