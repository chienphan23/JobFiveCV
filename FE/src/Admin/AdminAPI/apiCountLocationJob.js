import axios from "../../Setup/setupAxios";

const apiCountLocationJob = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/count/locationJob"
  );
  return result;
};

export default apiCountLocationJob;
