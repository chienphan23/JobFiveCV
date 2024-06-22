import axios from "../../../Setup/setupAxios";

const apiGetFollowCompany = async (candidateId, employerId) => {
    if (candidateId == null) return { status: 200, message: "Hoang ga" };
    const result = await axios.get(
        `http://localhost:8080/api/follow/getByCandidateAndEmployer/${candidateId}/${employerId}`
    );
    return result;
};

export { apiGetFollowCompany };
