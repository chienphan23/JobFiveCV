import { useQuery } from "@tanstack/react-query";
import { apiGetReviewScoreByCandidate } from "./apiGetReviewScoreByCandidate";

export const useGetReviewScoreByCandidate = (cId, eId) => {
  const {
    data: reviewScoreByCandidate,
    isLoadingGetScore,
    error,
  } = useQuery({
    queryKey: ["ReviewScoreByCandidate" + cId],
    queryFn: () => apiGetReviewScoreByCandidate(cId, eId),
  });

  return { reviewScoreByCandidate, isLoadingGetScore, error };
};
