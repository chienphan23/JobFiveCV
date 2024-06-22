import axios from "../Setup/setupLogin"

const apiGetProvince = async () => {
    const result = await axios.get("http://localhost:8080/api/province");
    return result;
}

export{apiGetProvince}