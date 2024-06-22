import axios from "../../Setup/setupAxios";

const apiCreateIndustry = async (formData) => {
  const url = `http://localhost:8080/api/industry/create`;
  const result = await axios.post(url, formData);
  console.log(result);
  return result;
};

export { apiCreateIndustry };
