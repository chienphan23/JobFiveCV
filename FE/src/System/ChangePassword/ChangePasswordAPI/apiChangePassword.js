import axios from "../../../Setup/setupAxios";

const apiChangePassword = async (id, formData) => {
    const result = await axios.put(
        `http://localhost:8080/api/users/changePassword/${id}`,
        formData
    );
    return result;
};
export { apiChangePassword };
