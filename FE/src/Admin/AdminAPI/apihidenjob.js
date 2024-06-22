import axios from "../../Setup/setupAxios";

const apiHideJob = async (jobId, reportId, employerId) => {
  console.log(jobId, reportId, employerId);
  const url = `http://localhost:8080/api/job/hide/${jobId}/report/${reportId}/employer/${employerId}`;
  const result = await axios.put(url);
  console.log(result);
  return result;
};

export { apiHideJob };
