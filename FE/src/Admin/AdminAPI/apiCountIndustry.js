import axios from "../../Setup/setupAxios";

const apiCountIndustry = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/count/industry"
  );
  console.log(result);
  return result;
};

export default apiCountIndustry;
