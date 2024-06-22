import axios from "../../../Setup/setupAxios";

const apiFollowEmployer = async (formData) => {
    const result = await axios.post(
        "http://localhost:8080/api/follow/create",
        formData
    );
    return result;
};

export { apiFollowEmployer };
