import axios from "../../../Setup/setupLogin";

export const apiGetJob = async (id) => {
  const result = await axios.get(`http://localhost:8080/api/job/${id}`);
  return result;
};
export const apiGetJobDescription = async (idJob) => {
  const result = await axios.get(
    `http://localhost:8080/api/jobdecription/${idJob}`
  );
  return result;
};

export const apiGetJobRequirement = async (idJob) => {
  const result = await axios.get(
    `http://localhost:8080/api/jobrequirement/${idJob}`
  );
  return result;
};

export const apiGetjobBenefit = async (idJob) => {
  const result = await axios.get(
    `http://localhost:8080/api/jobbenefit/${idJob}`
  );
  return result;
};

export const apiGetIndustriesOfJob = async (idJob) => {
  const result = await axios.get(
    `http://localhost:8080/api/jobsIndustries/${idJob}`
  );

  return result;
};

export const apiGetEmployerOfJob = async (idEmployer) => {
  const result = await axios.get(
    `http://localhost:8080/api/employer/${idEmployer}`
  );
  return result;
};
