import axios from "../../Setup/setupAxios";

const apiUpdateIndustry = async (industryId, formData) => {
  console.log(industryId);
  const url = `http://localhost:8080/api/industry/update/${industryId}`;
  const result = await axios.put(url, formData);
  console.log(result);
  return result;
};

export { apiUpdateIndustry };
