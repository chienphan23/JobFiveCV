import axios from "../../../Setup/setupLogin";
 
const apiGetTopEmployers = async () => {
    const result = await axios.get("http://localhost:8080/api/employer/getTop");
    return result;
};
 
export { apiGetTopEmployers };