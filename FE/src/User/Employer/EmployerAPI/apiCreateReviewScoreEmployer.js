import axios from "../../../Setup/setupAxios";

const apiCreateReviewScoreEmployer = async (formData) => {
  console.log(formData.get("reviewDate"));
  const result = await axios.post(
    `http://localhost:8080/api/employerReview/create`,
    formData
  );
  return result;
};

export { apiCreateReviewScoreEmployer };
