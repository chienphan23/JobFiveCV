import axios from "../../../Setup/setupAxios";

const apiGetApplicationByJob = async (id) => {
    if (!id || id === undefined) {
        return { status: 200, data: null };
    }
    const result = await axios.get(
        `http://localhost:8080/api/application/getByJob/${id}`
    );

    return result;
};

export { apiGetApplicationByJob };
