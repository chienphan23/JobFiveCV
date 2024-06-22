import axios from "../../../Setup/setupLogin"

export const apiGetIndustriesForHome = async (numJobs) => {
    const result = await axios.get(`http://localhost:8080/api/jobsIndustries/quantityJobOfIndustryId`)
    return result;
}