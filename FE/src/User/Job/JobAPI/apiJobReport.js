import axios from "../../../Setup/setupAxios";

const apiJobReport = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/JobReport/create",
        formData
    );
    return result;
};

export { apiJobReport };
