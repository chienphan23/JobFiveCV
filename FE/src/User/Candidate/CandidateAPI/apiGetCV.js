import axios from "../../../Setup/setupAxios";

const apigetCV = async (id) => {
    const cvs = await axios.get(`http://localhost:8080/api/cv/list/${id}`);
    return cvs;
};

export { apigetCV };
