import axios from "../../../Setup/setupAxios";

export const apiUpdateAllNotificationByUser = async (id) => {
    const result = await axios.put(
        `http://localhost:8080/api/notification/updateByUser/${id}`
    );
    return result;
};
