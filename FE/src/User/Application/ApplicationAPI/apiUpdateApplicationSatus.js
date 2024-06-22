import axios from "../../../Setup/setupAxios";

export const apiUpdateApplicationStatus = async (id, formData) => {
    if (!id || id === undefined) {
        return { status: 200, data: null };
    }
    const result = await axios.put(
        `http://localhost:8080/api/application/updateStatus/${id}`,
        formData
    );
    return result;
};
