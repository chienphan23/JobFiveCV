import axios from "../../../Setup/setupLogin"

export const apiGetTopJobForHome = async (numJobs) => {
    const result = await axios.get(`http://localhost:8080/api/job/getTopJobForHome/${numJobs}`)
    return result;
}