import axios from "../../../Setup/setupAxios";

const apiGetCvApplication = async (candidateId, jobId) => {
    const application = await axios.get(
        `http://localhost:8080/api/application/getByCandidateAndJob/?candidateId=${candidateId}&jobId=${jobId}`
    );
    return application;
};

export { apiGetCvApplication };
