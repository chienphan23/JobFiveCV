import axios from "../../../Setup/setupLogin";

const apiGetListEmployers = async () => {
    const result = await axios.get(`http://localhost:8080/api/employer`);
    return result;
};

export { apiGetListEmployers };
