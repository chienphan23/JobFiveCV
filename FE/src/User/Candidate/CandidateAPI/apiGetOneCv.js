import axios from "../../../Setup/setupAxios";

const apiGetOneCv = async (id) => {
    if (id) {
        const cv = await axios.get(`http://localhost:8080/api/cv/${id}`);
        return cv;
    }
    return null;
};

export { apiGetOneCv };
