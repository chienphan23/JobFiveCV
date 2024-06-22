import axios from "../../Setup/setupAxios";

const apiAcceptEmployer = async (userId) => {
  const url = `http://localhost:8080/api/employer/approvedAccept/${userId}`;
  const result = await axios.post(url);
  console.log(result);
  return result;
};

export { apiAcceptEmployer };
