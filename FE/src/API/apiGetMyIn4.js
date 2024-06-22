import axios from "../Setup/setupAxios";
import Cookies from "js-cookie";

 
const apiGetMyIn4 = async () => {
   
    const user = await axios.get("http://localhost:8080/api/users/myInfo");
    if("message" in user) {
        return user
    }
    if(user?.data?.role === "admin"){
      return user;
    }
    let info = null;
    if (user?.data?.role === "employer")
        info = await axios.get(
            `http://localhost:8080/api/employer/${user?.data.userId}`
        );
    else if (user?.data?.role === "candidate")
        info = await axios.get(
            `http://localhost:8080/api/candidate/${user?.data.userId}`
        );
        
    return info;
};
 
export default apiGetMyIn4;