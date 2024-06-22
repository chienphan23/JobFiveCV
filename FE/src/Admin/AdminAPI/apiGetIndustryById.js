import axios from "../../Setup/setupAxios";

const apiGetIndustryById = async (industryId) => {
  const url = `http://localhost:8080/api/industry/${industryId}`;
  const result = await axios.get(url);
  console.log(result);
  return result;
};

export { apiGetIndustryById };
