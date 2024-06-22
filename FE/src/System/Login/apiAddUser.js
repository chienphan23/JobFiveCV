import axios from "axios";

const apiAddUser = async (formData) => {
  const result = await axios.post(
    "http://localhost:8080/auth/register",
    formData
  );
  if (result !== null) {
    return result.data.data.token;
  }
  return null;
};
export { apiAddUser };
