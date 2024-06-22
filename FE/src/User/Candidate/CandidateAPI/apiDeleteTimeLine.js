import axios from "../../../Setup/setupAxios";

const apiDeleteTimeLine = async (id) => {
    const detete = await axios.delete(
        `http://localhost:8080/api/timeLine/delete/${id}`
    );
    return detete;
};

export { apiDeleteTimeLine };
