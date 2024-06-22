import axios from "../../../Setup/setupAxios";

export const apiCreateNotification = async (formData) => {
    const result = await axios.post(
        `http://localhost:8080/api/notification/create`,
        formData
    );
    return result;
};
