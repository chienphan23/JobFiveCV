import axios from "../../Setup/setupAxios";

const apoGetReportJob = async () => {
  const report = await axios.get("http://localhost:8080/api/JobReport");
  return report;
};

export default apoGetReportJob;
