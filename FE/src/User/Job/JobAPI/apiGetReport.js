import axios from "../../../Setup/setupAxios";

const apiGetReport = async (candidateId, jobId) => {
    const JobReport = await axios.get(
        `http://localhost:8080/api/JobReport/getByCandidateAndJob/${candidateId}/${jobId}`
    );
    return JobReport;
};

export { apiGetReport };
