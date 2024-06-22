import axios from "../../Setup/setupAxios";

const apiTotalCompanies = async () => {
  const result = await axios.get(
    "http://localhost:8080/api/statistics/total/companies"
  );
  return result;
};

export default apiTotalCompanies;
