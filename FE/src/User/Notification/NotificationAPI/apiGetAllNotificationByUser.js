import axios from "../../../Setup/setupAxios";

export const apiGetAllNotificationByUser = async (id) => {
    if(!id){
        return {
            status: 200,
            data: null
        }
    }
    const result = await axios.get(
        `http://localhost:8080/api/notification/${id}`
    );
    return result;
};
