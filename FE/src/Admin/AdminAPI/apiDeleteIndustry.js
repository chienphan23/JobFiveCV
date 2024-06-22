import axios from "../../Setup/setupAxios";

const apiDeleteIndustry = async (industryId) => {
  console.log(industryId);
  const url = `http://localhost:8080/api/industry/delete/${industryId}`;
  console.log(url);
  const result = await axios.delete(url);
  console.log(result);
  return result;
};

export { apiDeleteIndustry };
