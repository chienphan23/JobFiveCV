import axios from "../../../Setup/setupAxios";

const apiDeleteFollow = async (id) => {
    const detete = await axios.delete(
        `http://localhost:8080/api/follow/delete/${id}`
    );
    return detete;
};

export { apiDeleteFollow };
