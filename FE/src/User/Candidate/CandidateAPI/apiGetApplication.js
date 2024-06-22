import axios from "../../../Setup/setupAxios";

const apiGetApplication = async (id) => {
    const application = await axios.get(
        `http://localhost:8080/api/application/getByCandidate/${id}`
    );
    return application;
};

export { apiGetApplication };
