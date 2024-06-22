import axios from "../../../Setup/setupAxios";

const apiApplyJob = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/application/create",
        formData
    );
    return result;
};

export { apiApplyJob };
