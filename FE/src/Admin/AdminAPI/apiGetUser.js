import axios from "../../Setup/setupAxios";

const apiGetUser = async () => {
  const user = await axios.get("http://localhost:8080/api/users");
  return user;
};

export default apiGetUser;
