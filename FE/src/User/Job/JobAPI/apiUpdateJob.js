import axios from "../../../Setup/setupAxios";
import { apiAddIndustry } from "./apiIndustry";

export const apiUpdateJob = async (
  idJob,
  formdata,
  arrayDescription,
  arrayBenefit,
  arrayRequirement,
  arrayIndustryId
) => {
  console.log(idJob);
  const result = await axios.put(
    `http://localhost:8080/api/job/update/${idJob}`,
    formdata
  );

  const deleteAllDescription = await axios.delete(
    `http://localhost:8080/api/jobdecription/deleteByJobId/${idJob}`
  );
  for (let i of arrayDescription) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", idJob);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobdecription/create",
        formdataNew
      );
    }
  }

  const deleteAllRequirement = await axios.delete(
    `http://localhost:8080/api/jobrequirement/deleteByJobId/${idJob}`
  );
  for (let i of arrayRequirement) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", idJob);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobrequirement/create",
        formdataNew
      );
    }
  }

  const deleteAllBenefit = await axios.delete(
    `http://localhost:8080/api/jobbenefit/deleteByJobId/${idJob}`
  );
  for (let i of arrayBenefit) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", idJob);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobbenefit/create",
        formdataNew
      );
    }
  }
  const deleteAllIndustriesOfJob = await axios.delete(
    `http://localhost:8080/api/jobsIndustries/deleteByJobId/${idJob}`
  );
  await apiAddIndustry(arrayIndustryId, idJob);
  return result;
};
