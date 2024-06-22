import axios from "../../../Setup/setupAxios";

export const apiGetListSavedByCandidate = async (candidateId, jobId) => {
    const result = await axios.get(
        `http://localhost:8080/api/jobInterest/getByCandidateAndJob/${candidateId}/${jobId}`
    );
    return result;
};
