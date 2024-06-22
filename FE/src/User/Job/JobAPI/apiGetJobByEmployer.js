import axios from "../../../Setup/setupAxios";

export const apiGetJobByEmployer = async (id) => {
    if (!id || id === undefined) {
        return { status: 200, data: null };
    }
    const result = await axios.get(
        `http://localhost:8080/api/job/getByEmployer/${id}`
    );
    return result;
};
