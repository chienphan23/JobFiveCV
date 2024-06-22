import axios from "../../../Setup/setupAxios";

const apiCreateCv = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/cv/create",
        formData
    );
    return result;
};

export { apiCreateCv };
