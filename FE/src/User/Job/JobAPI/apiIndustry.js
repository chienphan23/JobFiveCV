import axios from "../../../Setup/setupAxios"

const apiAddIndustry = async (arrayIndustryId, id) => {
    // arrayIndustryId.map(
    //     async i => {
    //         console.log(i)
    //         let formdataNew = new FormData()
    //         formdataNew.append("industries_industryid", 1) 
    //         formdataNew.append("job_jobid", id)
    //         await axios.post("http://localhost:8080/api/jobsIndustries/create", formdataNew)
    //     }
    // )

    for (const i of arrayIndustryId) {
        console.log(i);
        let formdataNew = new FormData();
        formdataNew.append("industries_industryid", i);
        formdataNew.append("job_jobid", id);
        await axios.post("http://localhost:8080/api/jobsIndustries/create", formdataNew);
    }

    // const result = await axios.post("http://localhost:8080/api/jobsIndustries/create", formdata)
    // return result
}

export {apiAddIndustry}
