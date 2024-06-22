import axios from "../../Setup/setupAxios";

const apiCountIndustryApplications = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/count/industryApplications"
  );
  // console.log(result);
  return result;
};

export default apiCountIndustryApplications;
