import axios from "../../Setup/setupAxios";

const apiGetEmployerApproved = async () => {
  const url = `http://localhost:8080/api/employer/approved`;
  const result = await axios.get(url);
  console.log(result);
  return result;
};

export { apiGetEmployerApproved };
