import axios from "../../Setup/setupAxios";

export const apiDeleteIndustryOfJob = async (formData) => {
    const result = await axios.delete(`http://localhost:8080/api/jobsIndustries`, formData)
    return result;
}