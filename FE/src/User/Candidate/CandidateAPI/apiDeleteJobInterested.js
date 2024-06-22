import axios from "../../../Setup/setupAxios";

const apiDeleteJobInterested = async (id) => {
    const detete = await axios.delete(
        `http://localhost:8080/api/jobInterest/delete/${id}`
    );
    return detete;
};

export { apiDeleteJobInterested };
