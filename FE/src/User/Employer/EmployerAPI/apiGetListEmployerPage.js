import axios from "../../../Setup/setupLogin"

export const apiGetListEmployerPage = async (employerName,skip,limit) => {
    const formData = new FormData()
    formData.append("employerName",employerName)
    formData.append("skip", skip)
    formData.append("limit", limit)
    const result = await axios.post("http://localhost:8080/api/employer/searchEmployer", formData)
    console.log(result)
    return result
}