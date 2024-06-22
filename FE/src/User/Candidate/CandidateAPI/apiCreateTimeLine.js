import axios from "../../../Setup/setupAxios";

const apiCreateTimeLine = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/timeLine/create",
        formData
    );
    return result;
};

export { apiCreateTimeLine };
