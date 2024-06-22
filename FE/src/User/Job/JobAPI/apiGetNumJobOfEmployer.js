import axios from "../../../Setup/setupAxios";

export const apiGetNumJobOfEmployer = async (employerId) => {
    if(employerId === null){
        return {
            status: 200,
            data: 0
        }
    }
    const result = await axios.get(
        `http://localhost:8080/api/job/numJobOfEmployer/${employerId}`
    );
    return result;
};
