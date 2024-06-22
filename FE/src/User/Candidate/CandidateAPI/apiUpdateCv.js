import axios from "../../../Setup/setupAxios";

const apiUpdateCv = async (id, formData) => {
    const result = await axios.put(
        `http://localhost:8080/api/cv/update/${id}`,
        formData
    );
    return result;
};
export { apiUpdateCv };
