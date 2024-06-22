import axios from "../../../Setup/setupLogin"

export const apiGetQuantityJobOfIndustry = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/jobsIndustries/quantityJobOfIndustryId/${id}`)
    return result;
}