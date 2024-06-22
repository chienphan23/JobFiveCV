import axios from "../../Setup/setupAxios";

const apiDeleteUser = async (userId) => {
  console.log(userId);
  const url = `http://localhost:8080/api/users/${userId}`;
  console.log(url);
  const result = await axios.delete(url);
  console.log(result);
  return result;
};

export { apiDeleteUser };
