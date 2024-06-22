import { LoadingPage } from "../../../UI/LoadingPage";
import { useGetCandidate } from "../../Candidate/CandidateAPI/useGetCandidate";
export const NameOfCandidate = ({ candidateId }) => {
    const { candidate, isLoading } = useGetCandidate(candidateId);
    if (isLoading) return <LoadingPage />;
    return <>{candidate?.data.fullName}</>;
};
