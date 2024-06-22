import axios from "../../../../Setup/setupAxios";

const apiGetAllRanks = async () => {
    const result = await axios.get("http://localhost:8080/api/rank");
    return result;
};

export { apiGetAllRanks };
