import axios from "../../Setup/setupAxios";

const apiNotAcceptEmployer = async (userId) => {
  const url = `http://localhost:8080/api/employer/approvedNotAccept/${userId}`;
  const result = await axios.delete(url);
  console.log(result);
  return result;
};

export { apiNotAcceptEmployer };
