import axios from "../../../Setup/setupLogin";

const apiGetEmployer = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/employer/${id}`);
    return result;
};

export { apiGetEmployer };
