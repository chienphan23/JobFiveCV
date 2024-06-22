import axios from "../../Setup/setupAxios";

const apiGetIndustry = async () => {
  const industry = await axios.get("http://localhost:8080/api/industry");
  return industry;
};

export default apiGetIndustry;
