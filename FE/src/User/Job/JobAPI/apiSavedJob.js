import axios from "../../../Setup/setupAxios";

const apiSavedJob = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/jobInterest/create",
        formData
    );
    return result;
};

export { apiSavedJob };
