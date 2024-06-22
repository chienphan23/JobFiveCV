import axios from "../../Setup/setupAxios";
import Cookies from "js-cookie";

const apiPostLogOut = async () => {
  console.log("alo123")

  const formData = new FormData();
  const jwt = Cookies.get("AUTH_TOKEN");
  formData.append("token", jwt);
  const result = await axios.post(
    "http://localhost:8080/api/auth/logout",
    formData
  );
  Cookies.remove('AUTH_TOKEN');

  return result;
};
export { apiPostLogOut };
