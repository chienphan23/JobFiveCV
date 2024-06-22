import axios from "../../../Setup/setupAxios";
import { apiAddIndustry } from "./apiIndustry";

const apiJob = async (
  formdata,
  arrayDescription,
  arrayBenefit,
  arrayRequirement,
  arrayIndustryId
) => {
  const result = await axios.post(
    "http://localhost:8080/api/job/create",
    formdata
  );
  let id = result.data.jobId;

  // add JobDescription
  for (let i of arrayDescription) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", id);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobdecription/create",
        formdataNew
      );
    }
  }
  for (let i of arrayBenefit) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", id);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobbenefit/create",
        formdataNew
      );
    }
  }
  for (let i of arrayRequirement) {
    if (i.replace(/\s+/g, " ").trim().length !== 0) {
      i = i.replace(/^[^a-zA-Z0-9\sÀ-ỹ]*/, "");
      let formdataNew = new FormData();
      formdataNew.append("jobId", id);
      formdataNew.append("description", i.replace(/\s+/g, " ").trim());
      await axios.post(
        "http://localhost:8080/api/jobrequirement/create",
        formdataNew
      );
    }
  }

  await apiAddIndustry(arrayIndustryId, id);
  return result;
};

export { apiJob };
