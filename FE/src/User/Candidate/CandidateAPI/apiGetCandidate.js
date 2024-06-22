import axios from "../../../Setup/setupAxios";

const apiGetCandidate = async (id) => {
    const candidate = await axios.get(
        `http://localhost:8080/api/candidate/${id}`
    );
    return candidate;
};

export { apiGetCandidate };
