import axios from "../../Setup/setupAxios";

const apiDeletereportJob = async (reportId) => {
  console.log(reportId);
  const url = `http://localhost:8080/api/JobReport/deleteOnly/${reportId}`;
  console.log(url);
  const result = await axios.delete(url);
  console.log(result);
  return result;
};

export { apiDeletereportJob };
