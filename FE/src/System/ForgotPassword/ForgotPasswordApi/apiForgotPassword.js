import axios from "../../../Setup/setupLogin"

export const apiForgotPassword = async (email) => {
    const formData = new FormData()
    formData.append('email', email)
    console.log("alo")
    const result = await axios.post("http://localhost:8080/api/users/forget", formData)
    return result
}