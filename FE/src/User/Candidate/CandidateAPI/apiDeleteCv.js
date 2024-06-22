import axios from "../../../Setup/setupAxios";

const apiDeleteCv = async (id) => {
    const detete = await axios.delete(
        `http://localhost:8080/api/cv/delete/${id}`
    );
    return detete;
};

export { apiDeleteCv };
