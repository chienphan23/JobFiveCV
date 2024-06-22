import axios from "../../../Setup/setupAxios";

const apiGetInterested = async (id) => {
    const jobInterested = await axios.get(
        `http://localhost:8080/api/jobInterest/${id}`
    );
    return jobInterested;
};

export { apiGetInterested };
