import axios from "../../../Setup/setupLogin"

export const apiSearchJob = async (industry, location, experience, minSalary, maxSalary, searchValue, typeJob, skip, limit) => {
    const formData = new FormData()
    formData.append('industryId', industry ? industry : 0)
    formData.append('location', location == "" ? null : location)
    // value năm kinh nghiệm = 6 đại diện cho không có kinh nghiệm
    formData.append('experience', experience == 6 ? 0 : experience)
    formData.append('minSalary', minSalary)
    formData.append('maxSalary', maxSalary)
    formData.append('searchValue', searchValue == "" ? null : searchValue)
    formData.append('typeJob', typeJob)
    formData.append('skip', skip)
    formData.append('limit', limit)

    // console.log("i" + formData.get('industryId') + "\nl" + location + "\nex" + experience + "\nmin" + minSalary +"\nmax" + maxSalary + "\nsearch" + searchValue + "\ntype" + typeJob)
    // console.log("alo"+formData.get('location'))
    
    const result = await axios.post(`http://localhost:8080/api/job/searchJob`, formData)
    return result;
}