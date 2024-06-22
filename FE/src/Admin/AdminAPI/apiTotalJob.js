import axios from "../../Setup/setupAxios";

const apiTotalJob = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/total/job"
  );
  return result;
};

export default apiTotalJob;
