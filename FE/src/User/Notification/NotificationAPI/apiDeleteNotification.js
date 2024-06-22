import axios from "../../../Setup/setupAxios";

export const apiDeleteNotification = async (id) => {
    const result = await axios.delete(
        `http://localhost:8080/api/notification/delete/${id}`
    );
    return result;
};
