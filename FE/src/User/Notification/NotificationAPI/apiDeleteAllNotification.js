import axios from "../../../Setup/setupAxios";

export const apiDeleteAllNotification = async (id) => {
    const result = await axios.delete(
        `http://localhost:8080/api/notification/deleteByUser/${id}`
    );
    return result;
};
