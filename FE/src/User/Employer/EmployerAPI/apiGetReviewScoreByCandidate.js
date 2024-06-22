import axios from "../../../Setup/setupAxios";

const apiGetReviewScoreByCandidate = async (cId, eId) => {
  if (cId == null) return { status: 200 };
  if (eId == null) return { status: 200 };

  const result = await axios.get(
    `http://localhost:8080/api/employerReview/candidate/${cId}/${eId}`
  );
  return result;
};

export { apiGetReviewScoreByCandidate };
