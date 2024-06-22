import axios from "../../Setup/setupAxios";

const apiBlockUser = async (userId) => {
  const url = `http://localhost:8080/api/users/lock/${userId}`;
  const result = await axios.post(url);
  console.log(result);
  return result;
};

export { apiBlockUser };
