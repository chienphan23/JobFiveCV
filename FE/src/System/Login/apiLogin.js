import axios from "../../Setup/setupLogin";

const apiLogin = async (formData) => {
  let result = await axios.post("http://localhost:8080/api/auth/login", formData);
  if (result !== null) {
    result = result.data
    return result;
  }
  return null;
};
export { apiLogin };
